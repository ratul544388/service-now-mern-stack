import { ConfirmModal } from "@/components/confirm-modal";
import { DropdownMenu } from "@/components/dropdown-menu";
import { request } from "@/lib/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Edit, MoreVertical, Trash } from "lucide-react";
import { useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const CellAction = ({ service }) => {
  const queryClient = useQueryClient();
  const [openModal, setOpenModal] = useState();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      request({
        method: "delete",
        url: `services/${service.id}`,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["services"] });
          toast.success("Service Deleted");
        },
        onError: (error) => {
          console.log(error);
          toast.error("Something went wrong");
        },
      }),
  });

  const items = [
    {
      label: "View Service",
      icon: FaProductHunt,
      onClick: () => navigate(`/services/${service.slug}`),
    },
    {
      label: "Edit Service",
      icon: Edit,
      onClick: () => navigate(`/dashboard/services/${service.slug}/edit`),
    },
    {
      label: "Delete Service",
      icon: Trash,
      onClick: () => setOpenModal(true),
    },
  ];
  return (
    <>
      <DropdownMenu
        items={items}
        className="min-h-9 rounded-full"
      >
        <MoreVertical />
      </DropdownMenu>
      {openModal && (
        <ConfirmModal
          onClose={setOpenModal}
          handleConfirm={mutate}
          isPending={isPending}
        />
      )}
    </>
  );
};
