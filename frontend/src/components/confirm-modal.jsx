import LoadingButton from "./loading-button";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export const ConfirmModal = ({
  onClose,
  handleConfirm,
  isPending,
  title = "Are you absolutely sure?",
  description = "This action cannot be undone.",
}) => {
  const handleClose = () => {
    if (isPending) return;
    onClose(false);
  };

  return (
    <Dialog open onOpenChange={handleClose}>
      <DialogContent className="max-w-[450px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <div className="mt-5 flex justify-end gap-3">
            <Button
              disabled={isPending}
              variant="outline"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <LoadingButton
              onClick={async () => {
                const ok = await handleConfirm();
                if (!ok) return;
                handleClose();
              }}
              isLoading={isPending}
              variant="destructive"
            >
              Confirm
            </LoadingButton>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
