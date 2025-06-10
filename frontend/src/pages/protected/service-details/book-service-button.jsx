import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useAuthStore from "@/hooks/use-auth-store";
import { useState } from "react";
import BookingForm from "./booking-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "@/image";

export const BookServiceButton = ({ service }) => {
  const { user: currentUser } = useAuthStore();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsBookingOpen(true)} size="lg" className="mt-5">
        Book Now
      </Button>
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-h-[100dvh] overflow-y-auto sm:max-h-[85dvh] sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Confirm Booking</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <Image
              src={service.imageUrl}
              alt="Service"
              height={200}
              width={550}
              className="mt-2"
            />
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Service ID</Label>
                <Input
                  autoFocus={false}
                  className="mt-2"
                  value={service.id}
                  readOnly
                />
              </div>
              <div>
                <Label>Service Name</Label>
                <Input className="mt-2" value={service.title} readOnly />
              </div>
              <div>
                <Label>Provider Email</Label>
                <Input
                  className="mt-2"
                  value={service.provider.email}
                  readOnly
                />
              </div>
              <div>
                <Label>Provider Name</Label>
                <Input
                  className="mt-2"
                  value={service.provider.name}
                  readOnly
                />
              </div>
              <div>
                <Label>Provider Address</Label>
                <Input className="mt-2" value={service.address} readOnly />
              </div>
              <div>
                <Label>Your Email</Label>
                <Input className="mt-2" value={currentUser.email} readOnly />
              </div>
              <div>
                <Label>Your Name</Label>
                <Input className="mt-2" value={currentUser.name} readOnly />
              </div>
              <div>
                <Label>Price</Label>
                <Input className="mt-2" value={`$${service.price}`} readOnly />
              </div>
            </div>
            <BookingForm
              onBookingComplete={() => setIsBookingOpen(false)}
              serviceId={service.id}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
