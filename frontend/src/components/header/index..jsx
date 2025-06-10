import Container from "../container";
import { ThemeToggler } from "../theme-toggler";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";
import { UserButton } from "./user-button";

const Header = () => {
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
          <ThemeToggler />
          <UserButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
