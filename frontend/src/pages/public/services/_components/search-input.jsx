import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

const SearchInput = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  const [value, setValue] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }
      navigate(`?${params.toString()}`);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [value, navigate]);

  return (
    <div className="relative mx-auto max-w-xl flex-1">
      <Search className="text-muted-foreground absolute top-1/2 left-4 -translate-y-1/2" />
      <Input
        type="search"
        placeholder="Search services by name, category, or tag..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-primary focus-visible:border-primary focus-visible:ring-primary/20 bg-background focus:border-ring focus:ring-ring h-14 w-full rounded-full border-2 pr-4 pl-12 text-base shadow-md transition-all focus:ring-2 focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
