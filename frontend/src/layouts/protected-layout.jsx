import PageLoader from "@/components/page-loader";
import useAuthStore from "@/hooks/use-auth-store";
import { Navigate, Outlet } from "react-router";

const ProtectedLayout = () => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <PageLoader />;
  }

  if (!user && !loading) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
