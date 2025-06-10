import { Leaf, SearchX } from "lucide-react"; // Example icon, change as you want
import Container from "./container";

const EmptyState = ({
  title = "No Items Found",
  description = "There are no items to display at the moment. Please check back later or add new items.",
}) => {
  return (
    <Container className="flex flex-col items-center justify-center p-10 text-center text-muted-foreground">
      <SearchX className="mb-4 size-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
      <p className="max-w-xs">{description}</p>
    </Container>
  );
};

export default EmptyState;
