import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const DropdownMenu = ({
  items,
  children,
  align = "end",
  className,
  showActive,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(buttonVariants({ variant: "ghost" }), className)}
      >
        {children}
      </PopoverTrigger>
      <PopoverContent align={align} className="flex w-full flex-col px-0 py-2">
        {items.map(
          ({
            label,
            destructive,
            icon: Icon,
            active,
            disabled,
            onClick,
            badge,
          }) => (
            <Button
              onClick={() => {
                onClick();
                setOpen(false);
              }}
              disabled={disabled}
              key={label}
              className={cn(
                "relative justify-start rounded-none px-5!",
                destructive && "text-red-500 hover:text-red-600",
              )}
              variant="ghost"
            >
              {badge && (
                <span
                  className={cn(
                    "bg-accent flex size-5 items-center justify-center rounded-full text-xs font-medium",
                    badge.isPending && "animate-pulse",
                  )}
                >
                  {badge.label}
                </span>
              )}
              {Icon && <Icon className="size-4" />}
              {label}
              {showActive && (
                <Check
                  className={cn(
                    "text-muted-foreground size-4 opacity-0 ml-auto",
                    active && "opacity-100",
                  )}
                />
              )}
            </Button>
          ),
        )}
      </PopoverContent>
    </Popover>
  );
};
