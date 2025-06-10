import Image from "@/image";
import { formatPrice } from "@/lib/utils";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ServiceCard = ({
  title,
  slug,
  description,
  imageUrl,
  price,
  provider,
}) => {
  return (
    <motion.li
      className="overflow-hidden rounded-xl border bg-background shadow-md transition hover:shadow-xl"
      whileHover={{ scale: 1.03 }}
    >
      <Link to={`/services/${slug}`}>
        <Image src={imageUrl} height={200} width={630} />
        <div className="p-4">
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="mb-3 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={provider.imageUrl}
                alt="Provider"
                className="size-8 rounded-full"
              />
              <span className="text-sm font-medium">{provider.name}</span>
            </div>
            <span className="text-sm font-semibold text-indigo-600">
              {formatPrice(price)}
            </span>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

export default ServiceCard;
