import EmptyState from "@/components/empty-state";
import PageTitle from "@/components/page-title";
import ServiceCard from "@/components/service-card";
import ServiceCardSkeleton from "@/components/skeletons/service-cards.-skeleton";
import Title from "@/components/title";
import useAuthStore from "@/hooks/use-auth-store";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";

const MyBookings = () => {
  const { user } = useAuthStore();
  const { data: services = [], isPending } = useQuery({
    queryKey: ["services"],
    queryFn: () => request({ url: "services", params: { userId: user.id } }),
  });

  if (services.length === 0 && !isPending) {
    return (
      <EmptyState
        title="No Booking found"
        description="You haven't booked any service yet. "
      />
    );
  }

  return (
    <>
      <Title>My Bookings</Title>
      <PageTitle title="My Bookings" className="mb-8" />
      {isPending && <ServiceCardSkeleton />}
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </ul>
    </>
  );
};

export default MyBookings;
