import React, { useMemo, useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Eye, EyeOff } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const FormPasswordInput = ({ control, label, placeholder, name, disabled }) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = useMemo(() => (showPassword ? EyeOff : Eye), [showPassword]);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{label || name}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                disabled={disabled}
                className="pr-9"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "absolute top-1/2 right-1 size-7 -translate-y-1/2 rounded-full",
                )}
              >
                <Icon role="button" className="size-4" />
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormPasswordInput;
