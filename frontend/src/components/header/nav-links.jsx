import { dashboardNavLinks, navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { buttonVariants } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import useAuthStore from "@/hooks/use-auth-store";

const NavLinks = ({ className }) => {
  const {user} = useAuthStore()
  const { pathname } = useLocation();
  return (
    <nav className={cn("hidden md:flex", className)}>
      <ul className="flex">
        {navLinks(user).map(({ label, href }) => {
          const isActive = pathname === href;
          const ActiveElem = motion.span;
          return (
            <li key={label}>
              <Link
                to={href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-foreground/70 hover:text-primary whitespace-nowrap",
                  isActive && "text-primary hover:text-primary",
                )}
              >
                <span className="relative">
                  {label}
                  {isActive && (
                    <ActiveElem
                      layoutId="activeNavLink"
                      className="bg-primary absolute inset-x-0 -bottom-2 h-1 rounded-full"
                    />
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {user && <DashboardNavigationMenu />}
    </nav>
  );
};

const DashboardNavigationMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={buttonVariants({
          variant: "ghost",
          className: "text-muted-foreground",
        })}
      >
        Dashboard
        <ChevronDown
          className={cn("size-4 transition", open && "rotate-180")}
        />
      </PopoverTrigger>
      <PopoverContent className="flex w-fit flex-col p-0 py-2" align="start">
        {dashboardNavLinks.map(({ href, label, icon }) => {
          const Icon = icon;
          return (
            <Link
              onClick={() => setOpen(false)}
              to={href}
              key={label}
              className={buttonVariants({
                variant: "ghost",
                className: "text-muted-foreground justify-start rounded-none",
              })}
            >
              <Icon className="size-4" />
              {label}
            </Link>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};

export default NavLinks;
