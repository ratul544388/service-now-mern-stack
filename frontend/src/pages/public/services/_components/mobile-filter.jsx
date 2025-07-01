import { buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Filter } from "lucide-react";
import Sidebar from "./sidebar";
import { useState } from "react";

const MobileFilter = () => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={buttonVariants({ variant: "outline", className: "md:hidden" })}>
        <Filter />
      </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
        <Sidebar onClosePopover={() => setOpen(false)} type="popover" className="h-[calc(100vh_-_160px)]" />
      </PopoverContent>
    </Popover>
  );
};

export default MobileFilter;
