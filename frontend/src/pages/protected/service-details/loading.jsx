import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <Skeleton className="h-[200px] w-full max-w-[500px]" />
      <Skeleton className="mt-5 h-8 w-[200px]" />
      <Skeleton className="mt-2 h-4 w-[150px]" />
      <div className="flex flex-col gap-1.5 mt-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} className="h-3 w-full last:w-1/2" />
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div>
          <Skeleton className="h-4 w-24" />
          <Skeleton className="mt-1 h-3 w-36" />
        </div>
      </div>
      <Skeleton className="mt-4 h-4 w-36" />
      <Skeleton className="mt-4 h-5 w-28" />
      <Skeleton className="mt-10 h-10 w-28" />
    </>
  );
};

export default Loading;
