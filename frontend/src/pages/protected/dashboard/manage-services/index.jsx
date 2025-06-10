import PageLoader from "@/components/page-loader";
import Title from "@/components/title";
import useAuthStore from "@/hooks/use-auth-store";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../_components/data-table";
import { columns } from "./_components/columns";
import PageTitle from "@/components/page-title";

const ManageServices = () => {
  const { user } = useAuthStore();
  const { data: services = [], isPending } = useQuery({
    queryKey: ["services", user.id],
    queryFn: () =>
      request({ url: "services", params: { providerId: user.id } }),
  });

  if (isPending) {
    return <PageLoader/>
  }

  return (
    <>
      <Title>Manage Services</Title>
      <PageTitle title="Manage Services"/>
      <DataTable columns={columns} data={services} />
    </>
  );
};

export default ManageServices;
