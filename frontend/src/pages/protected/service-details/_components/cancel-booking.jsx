import { ConfirmModal } from "@/components/confirm-modal";
import { Button } from "@/components/ui/button";
import { request } from "@/lib/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const CancelBooking = ({ service }) => {
  console.log(service);
  const queryClient = useQueryClient();
  const [openModal, setOpenModal] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      request({
        method: "delete",
        url: `bookings/${service.id}`,
      }),
    onSuccess: () => {
      setOpenModal(false);
      queryClient.invalidateQueries({ queryKey: ["service", service.slug] });
      toast.success("Booking was Cancelled");
    },
    onError: () => {
      toast.error("");
    },
  });

  return (
    <>
      <p className="mt-5 text-green-500">
        You&apos;ve booked the service. We&apos;ll contact you soon.
      </p>
      <Button
        className="mt-2"
        variant="destructive"
        onClick={() => setOpenModal(true)}
      >
        Cancel Booking
      </Button>
      {openModal && (
        <ConfirmModal
          handleConfirm={mutate}
          isPending={isPending}
          onClose={setOpenModal}
        />
      )}
    </>
  );
};

export default CancelBooking;
