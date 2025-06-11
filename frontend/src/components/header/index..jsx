import useAuthStore from "@/hooks/use-auth-store";
import Container from "../container";
import { ThemeToggler } from "../theme-toggler";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";
import { UserButton } from "./user-button";
import { Button } from "../ui/button";

const Header = () => {
  const {user, loading} = useAuthStore()
  return (
    <header className="bg-background h-header-height sticky top-0 z-50 border-b">
      <Container className="flex h-full items-center justify-between gap-10">
        <div className="flex items-center gap-3">
          <MobileMenu />
          <div className="flex items-center gap-10">
            <Logo />
            <NavLinks />
          </div>
        </div>
        <div className="flex gap-3">
          {!user && !loading && (
            <>
              <Button href="/auth/login">Login</Button>
              <Button href="/auth/register" className="border-primary border-2 text-primary" variant="outline">Register</Button>
            </>
          )}
          <ThemeToggler className="md:flex hidden" />
          <UserButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
