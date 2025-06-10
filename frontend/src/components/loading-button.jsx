import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";

const LoadingButton = ({
  className,
  children,
  isLoading,
  disabled,
  ...props
}) => {
  return (
    <Button
      className={cn("relative has-[>svg]:px-4", className)}
      disabled={isLoading || disabled}
      {...props}
    >
      <span className={cn(isLoading && "opacity-0")}>{children}</span>
      {isLoading && <Loader className="absolute size-4 animate-spin" />}
    </Button>
  );
};

export default LoadingButton;
