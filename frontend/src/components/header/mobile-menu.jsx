import { dashboardNavLinks, navLinks } from "@/constants";
import useAuthStore from "@/hooks/use-auth-store";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ThemeToggler } from "../theme-toggler";
import { Button, buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Logo from "./logo";

const MobileMenu = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { user } = useAuthStore();

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden" asChild>
        <Button variant="outline" size="icon">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="py-5">
        <SheetHeader className="hidden">
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
        <Logo className="ml-4" />
        <ul>
          {navLinks(user).map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
          {user &&
            dashboardNavLinks.map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
        </ul>
        <ThemeToggler className="mt-auto ml-6" showLabel />
      </SheetContent>
    </Sheet>
  );
};

const NavLink = ({ href, label, icon }) => {
  const Icon = icon;
  const { pathname } = useLocation();

  return (
    <Link
      to={href}
      className={cn(
        buttonVariants({ variant: "ghost", size: "lg" }),
        "w-full justify-start rounded-none !px-6",
        href === pathname && "bg-accent",
      )}
    >
      <Icon className="size-5" />
      {label}
    </Link>
  );
};

export default MobileMenu;
