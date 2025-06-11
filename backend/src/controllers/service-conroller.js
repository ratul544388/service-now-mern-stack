import { db } from "../lib/db.js";
import { asyncHandler } from "../utils/async-handler.js";
import { serviceSchema } from "../validations/index.js";

// GET service by ID
export const getSerivceBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const service = await db.service.findUnique({
    where: {
      slug,
    },
    include: {
      provider: {
        select: {
          imageUrl: true,
          name: true,
          email: true,
        },
      },
      bookings: {
        select: {
          user: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  });

  return res.status(200).json(service);
});

// GET services
export const getServices = asyncHandler(async (req, res) => {
  const { providerId, take, userId, q } = req.query;

  if (providerId && providerId !== req?.user.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const services = await db.service.findMany({
    where: {
      ...(providerId ? { providerId } : {}),
      ...(userId
        ? {
            bookings: {
              some: {
                userId: req.user.id,
              },
            },
          }
        : {}),
      ...(q
        ? {
            OR: [
              {
                title: {
                  contains: q,
                  mode: "insensitive",
                },
              },
              {
                category: {
                  contains: q,
                  mode: "insensitive",
                },
              },
            ],
          }
        : {}),
    },
    include: {
      provider: {
        select: {
          name: true,
          imageUrl: true,
        },
      },
    },
    ...(take ? { take: parseInt(take) } : {}),
  });

  return res.status(200).json(services);
});


// CREATE a new Service
export const createService = asyncHandler(async (req, res) => {
  const values = serviceSchema.parse(req.body);
  const existingSlug = await db.service.findUnique({
    where: { slug: values.slug },
  });

  if (existingSlug) {
    return res
      .status(409)
      .json({ message: "Slug Already exist", field: "slug" });
  }

  const newService = await db.service.create({
    data: {
      ...values,
      providerId: req.user.id,
    },
  });
  res.status(201).json(newService);
});

// Update service
export const updateService = asyncHandler(async (req, res) => {
  const values = serviceSchema.parse(req.body);
  const { id } = req.query;
  const { slug } = req.params;
  const existingSlug = await db.service.findUnique({
    where: {
      NOT: {
        id,
      },
      slug: values.slug,
    },
  });

  if (existingSlug) {
    return res
      .status(409)
      .json({ message: "Slug Already exist", field: "slug" });
  }

  const updatedService = await db.service.update({
    where: {
      slug,
    },
    data: values,
  });
  res.status(200).json(updatedService);
});

// Delete service
export const deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await db.service.delete({
    where: {
      id,
    },
  });
  res.status(200).json({ success: true });
});
