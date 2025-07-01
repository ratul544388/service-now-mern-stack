import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { categories } from "@/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useSearchParams } from "react-router";

const Sidebar = ({ onClosePopover, className }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [price, setPrice] = useState(parseInt(searchParams.get("price")) || 0);
  const [selectedCategories, setSelectedCategories] = useState(
    () => searchParams.get("categories")?.split("+") ?? [],
  );

  const handleCheckChange = (newCategory) => {
    if (selectedCategories.includes(newCategory)) {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== newCategory),
      );
    } else {
      setSelectedCategories([...selectedCategories, newCategory]);
    }
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams);

    if (selectedCategories.length > 0) {
      params.set("categories", selectedCategories.join("+"));
    } else {
      params.delete("categories");
    }

    if (price) {
      params.set("price", price.toString());
    } else {
      params.delete("price");
    }
    setSearchParams(params);
    onClosePopover();
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setPrice(0);
    setSearchParams("");
    onClosePopover();
  };

  return (
    <aside
      className={cn(
        "sidebar bg-background sticky top-[95px] flex h-[calc(100vh_-_110px)] min-w-[230px] flex-col rounded-lg border p-4 shadow-md",
        className,
      )}
    >
      <div className="">
        <Label className="font-semibold">Max Price: ${price}</Label>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          className="mt-2 w-full cursor-pointer"
        />
      </div>
      <Separator className="mt-2 mb-3" />
      <Label className="font-semibold">Categories</Label>
      <ul className="mt-3 mb-4 flex flex-1 flex-col gap-2 overflow-y-auto">
        {categories.map(({ label, value }) => {
          return (
            <li key={label}>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  onChange={() => handleCheckChange(value)}
                  checked={selectedCategories.includes(value)}
                />
                <span>{label}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-3">
        {!!searchParams.size && (
          <Button
            onClick={handleReset}
            className="flex-1"
            variant="destructive"
            size="sm"
          >
            Reset
          </Button>
        )}
        <Button onClick={applyFilters} className="flex-1" size="sm">
          Apply Filter
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
