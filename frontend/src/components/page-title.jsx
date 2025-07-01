import { cn } from "@/lib/utils";
import React from "react";

const PageTitle = ({ title, className }) => {
  return (
    <h1 className={cn("text-primary mb-6 text-3xl font-bold", className)}>
      {title}
    </h1>
  );
};

export default PageTitle;
