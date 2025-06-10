import EmptyState from "@/components/empty-state";
import PageLoader from "@/components/page-loader";
import PageTitle from "@/components/page-title";
import ServiceCard from "@/components/service-card";
import Title from "@/components/title";
import useAuthStore from "@/hooks/use-auth-store";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";

const MyBookings = () => {
  const { user } = useAuthStore();
  const { data: services, isPending } = useQuery({
    queryKey: ["services"],
    queryFn: () => request({ url: "services", params: { userId: user.id } }),
  });

  if (isPending) {
    return <PageLoader />;
  }

  if (services.length === 0) {
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
      <PageTitle title="My Bookings" />
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </ul>
    </>
  );
};

export default MyBookings;
