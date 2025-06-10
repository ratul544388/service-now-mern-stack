import PageLoader from "@/components/page-loader";
import Title from "@/components/title";
import useAuthStore from "@/hooks/use-auth-store";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../dashboard/_components/data-table";
import { columns } from "./_components/columns";
import PageTitle from "@/components/page-title";

const ServicesTodo = () => {
  const { user } = useAuthStore();
  const { data: bookings, isPending } = useQuery({
    queryKey: ["bookings", user.id],
    queryFn: () =>
      request({ url: "bookings", params: { providerId: user.id } }),
  });

  if (isPending) {
    return <PageLoader />;
  }

  return (
    <>
      <Title>Service Todo</Title>
      <PageTitle title="Service Todo"/>
      <DataTable data={bookings} columns={columns} />
    </>
  );
};

export default ServicesTodo;
