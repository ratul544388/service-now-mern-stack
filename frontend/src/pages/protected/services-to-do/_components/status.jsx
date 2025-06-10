import { ConfirmModal } from "@/components/confirm-modal";
import { DropdownMenu } from "@/components/dropdown-menu";
import useAuthStore from "@/hooks/use-auth-store";
import { request } from "@/lib/request";
import { cn, formatText } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const serviceStatuses = ["PENDING", "IN_PROGRESS", "COMPLETED", "CANCELLED"];

const Status = ({ booking }) => {
  const [selectedStatus, setSelectedStatus] = useState(booking.status);
  const { user: provider } = useAuthStore();
  const queryClient = useQueryClient();
  const [openModal, setOpenModal] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: (status) =>
      request({
        method: "put",
        url: `bookings/${booking.id}`,
        params: {status}
      }),
    onSuccess: (_, variable) => {
      setOpenModal(false);
      toast.success(`Status Updated to ${formatText(variable)}`);
      queryClient.invalidateQueries({ queryKey: ["bookings", provider.id] });
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const items = serviceStatuses.map((s) => ({
    label: formatText(s),
    onClick: () => {
      setSelectedStatus(s);
      setOpenModal(true);
    },
    active: s === booking.status,
  }));

  return (
    <>
      {openModal && (
        <ConfirmModal
          title={`Update status to ${formatText(selectedStatus)}`}
          handleConfirm={() => mutate(selectedStatus)}
          isPending={isPending}
          onClose={setOpenModal}
        />
      )}
      <DropdownMenu
        showActive
        className={cn(
          "text-white hover:text-white",
          booking.status === "PENDING"
            ? "bg-yellow-500 hover:bg-yellow-500/90"
            : booking.status === "IN_PROGRESS"
              ? "bg-blue-500 hover:bg-blue-500/90"
              : booking.status === "COMPLETED"
                ? "bg-green-500 hover:bg-green-500/90"
                : "bg-destructive hover:bg-destructive/90",
        )}
        items={items}
      >
        {formatText(booking.status)}
      </DropdownMenu>
    </>
  );
};

export default Status;
