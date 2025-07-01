import EmptyState from "@/components/empty-state";
import ServiceCard from "@/components/service-card";
import ServiceCardSkeleton from "@/components/skeletons/service-cards.-skeleton";
import Title from "@/components/title";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import SearchInput from "./_components/search-input";
import Sidebar from "./_components/sidebar";
import MobileFilter from "./_components/mobile-filter";

const Services = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const categories = searchParams.get("categories");
  const price = searchParams.get("price");
  const { data: services = [], isPending } = useQuery({
    queryKey: ["services", q, price, categories],
    queryFn: () =>
      request({ url: "services", params: { q, price, categories } }),
  });

  return (
    <div className="flex gap-5">
      <Sidebar className="hidden md:flex"/>
      <div className="flex-1">
        <Title>Services</Title>
        <div className="flex items-center gap-4">
          <MobileFilter />
          <SearchInput />
        </div>
        <div className="mt-6">
          {!isPending && services.length === 0 && (
            <EmptyState
              title="No Services Found"
              description="We couldn't find any services matching your search. Try adjusting your keywords or filters."
            />
          )}
          {isPending && <ServiceCardSkeleton />}
          <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
