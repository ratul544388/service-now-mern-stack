import React from "react";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";

const ServiceCardSkeleton = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3", className)}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-xl shadow-md">
          <Skeleton className="h-[200px] w-full rounded-none" />
          <div className="p-4">
            <Skeleton className="h-6 w-[170px]" />
            <Skeleton className="mt-3 h-3 w-[150px]" />
            <Skeleton className="mt-3 h-3.5 w-13" />
            <Skeleton className="mt-4 h-3 w-full" />
            <Skeleton className="mt-2 h-3 w-full" />
          </div>
        </div>
      ))}
      <Skeleton />
    </div>
  );
};

export default ServiceCardSkeleton;
