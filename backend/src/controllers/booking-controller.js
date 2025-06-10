import { db } from "../lib/db.js";
import { asyncHandler } from "../utils/async-handler.js";
import { bookingSchema } from "../validations/index.js";

export const createBooking = asyncHandler(async (req, res) => {
  const values = bookingSchema.parse(req.body);
  const { serviceId } = req.params;

  await db.booking.create({
    data: {
      ...values,
      userId: req.user.id,
      serviceId,
    },
  });

  res.status(200).json({ success: true });
});

export const getBookings = asyncHandler(async (req, res) => {
  const { providerId, userId } = req.query;
  const bookings = await db.booking.findMany({
    where: {
      ...(providerId ? { service: { providerId } } : {}),
      ...(userId
        ? {
            userId,
          }
        : {}),
    },
    include: {
      service: {
        select: {
          imageUrl: true,
          title: true,
          category: true,
          bookings: {
            select: {
              serviceTakingDate: true,
            },
          },
        },
      },
      user: {
        select: {
          imageUrl: true,
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.status(200).json(bookings);
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const { serviceId } = req.params;

  await db.service.update({
    where: {
      id: serviceId,
    },
    data: {
      bookings: {
        deleteMany: {
          userId: req.user.id,
        },
      },
    },
  });

  return res.status(200).json({ success: true });
});

export const updateBooking = asyncHandler(async (req, res) => {
  const { bookingId } = req.params;
  const { status } = req.query;

  const booking = await db.booking.findUnique({
    where: {
      id: bookingId,
    },
    select: {
      service: {
        select: {
          providerId: true,
        },
      },
    },
  });

  if (booking.service.providerId !== req.user.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  await db.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      status,
    },
  });

  return res.status(200).json({ success: true });
});
