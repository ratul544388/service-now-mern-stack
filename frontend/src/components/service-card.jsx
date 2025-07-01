import Image from "@/image";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ServiceCard = ({
  title,
  category,
  slug,
  description,
  imageUrl,
  price,
}) => {
  return (
    <motion.li
      className="bg-background overflow-hidden rounded-xl border shadow-md transition hover:shadow-xl"
      whileHover={{ scale: 1.03 }}
    >
      <Link to={`/services/${slug}`}>
        <Image
          src={imageUrl}
          height={200}
          width={630}
          className="rounded-none hidden sm:block"
        />
        <Image
          src={imageUrl}
          height={140}
          width={630}
          className="rounded-none sm:hidden"
        />
        <div className="p-4">
          <h3 className="text-sm line-clamp-1 sm:text-xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{category}</p>
          <p className="text-primary mt-1 text-sm font-semibold">
            {formatPrice(price)}
          </p>
          <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </Link>
    </motion.li>
  );
};

export default ServiceCard;
