import Image from "@/image";
import { formatPrice } from "@/lib/utils";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { buttonVariants } from "./ui/button";

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
      className="bg-background overflow-hidden rounded-xl border shadow-md transition hover:shadow-xl"
      whileHover={{ scale: 1.03 }}
    >
      <Image src={imageUrl} height={200} width={630} className="rounded-none" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-primary mt-1 text-sm font-semibold">
          {formatPrice(price)}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={provider.imageUrl}
              alt="Provider"
              className="size-8 rounded-full"
            />
            <p className="text-sm font-medium line-clamp-1">{provider.name}</p>
          </div>
          <Link to={`/services/${slug}`} className={buttonVariants()}>
            View Details
          </Link>
        </div>
      </div>
    </motion.li>
  );
};

export default ServiceCard;
