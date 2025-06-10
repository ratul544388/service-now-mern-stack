import { cn } from "@/lib/utils";
import { Link } from "react-router";

const Logo = ({ className }) => {
  return (
    <Link
      to="/"
      className={cn(
        "flex text-foreground items-center gap-1.5 text-xl font-bold",
        className,
      )}
    >
      <img src="/images/logo.png" alt="Logo" className="size-11" />
      <div className="flex flex-col leading-[18px]">
        <span>Service</span>
        <span>
          Now
          <span className="text-primary font-extrabold">.</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
