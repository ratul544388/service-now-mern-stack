import { Leaf, SearchX } from "lucide-react"; // Example icon, change as you want
import Container from "./container";
import { cn } from "@/lib/utils";

const EmptyState = ({
  title = "No Items Found",
  description = "There are no items to display at the moment. Please check back later or add new items.",
  className,
}) => {
  return (
    <Container
      className={cn(
        "text-muted-foreground flex flex-col items-center justify-center p-10 text-center",
        className,
      )}
    >
      <SearchX className="text-muted-foreground mb-4 size-12" />
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
      <p className="max-w-xs">{description}</p>
    </Container>
  );
};

export default EmptyState;
