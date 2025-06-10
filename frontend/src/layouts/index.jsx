import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header/index.";
import StartNotice from "@/components/start-notice";
import useAuthStore from "@/hooks/use-auth-store";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router";

const Layout = () => {
  useScrollToTop();
  const { setUser, setLoading } = useAuthStore();
  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const user = await request({ url: "users/me" });
      setLoading(false);
      setUser(user);
      return user;
    },
  });

  return (
    <>
      <Header />
      <Container elem="main" className="min-h-main-height pt-5">
        <Outlet />
        <StartNotice />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
