import PageLoader from "@/components/page-loader";
import useAuthStore from "@/hooks/use-auth-store";
import { Navigate, Outlet } from "react-router";

const AuthLayout = () => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <PageLoader />;
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mx-auto mt-20 max-w-[500px]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
