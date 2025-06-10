import { TriangleAlert } from "lucide-react";
import React from "react";

const FormError = ({ error }) => {
  if (!error) return;
  return (
    <div className="text-destructive bg-destructive/10 flex items-center justify-center gap-3 rounded-lg px-4 py-2 text-center text-sm">
      <TriangleAlert className="size-4 min-w-4" />
      {error}
    </div>
  );
};

export default FormError;
