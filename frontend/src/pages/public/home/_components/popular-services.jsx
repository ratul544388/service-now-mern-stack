import ServiceCard from "@/components/service-card";
import ServiceCardSkeleton from "@/components/skeletons/service-cards.-skeleton";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router";

const PopularServices = () => {
  const { data: services = [], isPending } = useQuery({
    queryKey: ["services", "popular"],
    queryFn: () => request({ url: "services", params: { take: 6 } }),
  });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Popular Services
      </motion.h2>
      {isPending && <ServiceCardSkeleton />}
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </ul>
      <div className="mt-10 text-center">
        <Link
          to="/services"
          className="inline-block rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
        >
          Show All Services
        </Link>
      </div>
    </section>
  );
};

export default PopularServices;
