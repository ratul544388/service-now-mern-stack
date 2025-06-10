import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

const FormTextArea = ({
  control,
  label,
  placeholder,
  name,
  disabled,
  autoFocus,
  rows = 4,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{label || name}</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              autoFocus={autoFocus}
              placeholder={placeholder}
              disabled={disabled}
              rows={rows}
              className="resize-none"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextArea;
