import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { cn } from "@/lib/utils";

const FormRichTextEditor = ({
  control,
  name,
  label,
  placeholder,
  disabled,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="">
          <FormLabel className="capitalize">{label || name}</FormLabel>
          <FormControl>
            <ReactQuill
              theme="snow"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              readOnly={disabled}
              placeholder={placeholder}
              className={cn(
                "focus-within:border-ring focus-within:ring-ring/50 overflow-hidden rounded-md border shadow-sm focus-within:ring-[3px]",
                fieldState.invalid &&
                  "border-destructive focus-within:border-destructive focus-within:ring-destructive/20 dark:focus-within:ring-destructive/40",
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormRichTextEditor;
