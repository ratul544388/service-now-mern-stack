import React from "react";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";

const ServiceCardSkeleton = ({ className }) => {
  return (
    <div className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-3", className)}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-xl shadow-md">
          <Skeleton className="h-[200px] w-full rounded-none" />
          <div className="p-4">
            <Skeleton className="h-6 w-[170px]" />
            <Skeleton className="mt-3 h-3 w-12" />
            <Skeleton className="mt-4 h-3 w-full" />
            <Skeleton className="mt-2 h-3 w-full" />
            <div className="mt-4 flex items-center gap-2">
              <Skeleton className="size-9 rounded-full" />
              <Skeleton className="h-3.5 w-24" />
              <Skeleton className="ml-auto h-9 w-[104px]" />
            </div>
          </div>
        </div>
      ))}
      <Skeleton />
    </div>
  );
};

export default ServiceCardSkeleton;
