import { DropdownMenu } from "@/components/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WarningModal from "@/pages/protected/my-plants/_components/warning-modal";
import { Edit, Leaf, MoreVertical, Trash } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const PlantCard = ({
  _id,
  image,
  slug,
  name,
  category,
  careLevel,
  healthStatus,
  showDropdown,
}) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const dropdownMenuItems = [
    {
      label: "View Plant",
      onClick: () => navigate(`/plants/${slug}`),
      icon: Leaf,
    },
    {
      label: "Edit Plant",
      onClick: () => navigate(`/plants/${slug}/edit`),
      icon: Edit,
    },
    {
      label: "Delete Plant",
      onClick: () => setOpenModal(true),
      icon: Trash,
    },
  ];

  return (
    <li className="overflow-hidden rounded-xl border bg-background shadow-md hover:shadow-lg">
      <img
        src={image}
        className="bg-accent aspect-[6/4] w-full object-cover"
        alt="Plant Image"
      />
      <div className="flex flex-col p-5">
        <div className="flex items-center justify-between gap-5">
          <Link to={`/plants/${slug}`} className="font-medium hover:underline">
            {name}
          </Link>
          {showDropdown && (
            <DropdownMenu triggerClassName={""} items={dropdownMenuItems}>
              <MoreVertical className="size-4" />
            </DropdownMenu>
          )}
        </div>
        <p className="text-muted-foreground text-sm">{category}</p>
        <div className="text-muted-foreground my-3 flex items-center gap-1.5 text-sm">
          <Badge variant="secondary">{careLevel}</Badge>
          <span>-</span>
          <Badge variant="secondary">{healthStatus}</Badge>
        </div>
        <Link
          to={`/plants/${slug}`}
          className={cn(buttonVariants({ variant: "outline" }), "mt-3")}
        >
          View Details
        </Link>
      </div>
      {openModal && (
        <WarningModal plantId={_id} handleClose={() => setOpenModal(false)} />
      )}
    </li>
  );
};

export default PlantCard;
