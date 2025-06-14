import EmptyState from "@/components/empty-state";
import ServiceCard from "@/components/service-card";
import ServiceCardSkeleton from "@/components/skeletons/service-cards.-skeleton";
import Title from "@/components/title";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import SearchInput from "./_components/search-input";

const Services = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const { data: services = [], isPending } = useQuery({
    queryKey: ["services", q],
    queryFn: () => request({ url: "services", params: { q } }),
  });

  return (
    <>
      <Title>Services</Title>
      <SearchInput />
      {!isPending && services.length === 0 && (
        <EmptyState
          title="No Services Found"
          description="We couldn't find any services matching your search. Try adjusting your keywords or filters."
        />
      )}
      {isPending && <ServiceCardSkeleton/>}
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </ul>
    </>
  );
};

export default Services;
