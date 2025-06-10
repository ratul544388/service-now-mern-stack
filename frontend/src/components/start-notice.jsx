import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const StartNotice = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenNotice = localStorage.getItem("hasSeenStartNotice");

    if (!hasSeenNotice) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("hasSeenStartNotice", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[450px]">
        <DialogHeader className="text-start">
          <DialogTitle>Notice About Initial Delay</DialogTitle>
          <DialogDescription>
            This app is hosted on the free tier of Render. Because of this, the backend may take up to <strong className="text-red-500">50 seconds</strong> to respond to the first request after being inactive. Thank you for your patience!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button onClick={handleClose}>Got it</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StartNotice;
