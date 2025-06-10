import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Form } from "./ui/form";
import { cn } from "@/lib/utils";

const FormWrapper = ({ form, title, description, onSubmit, children, className }) => {
  return (
    <Card className={cn('bg-background max-w-[500px] mx-auto', className)}>
      <CardHeader className={cn(!title && "hidden")}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            {children}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormWrapper;
