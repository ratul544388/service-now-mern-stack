import FormDatePicker from "@/components/form-date-picker";
import FormInput from "@/components/form-input";
import LoadingButton from "@/components/loading-button";
import {
  Form
} from "@/components/ui/form";
import { request } from "@/lib/request";
import { bookingSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast } from "sonner";

const BookingForm = ({ onBookingComplete, serviceId }) => {
  const { slug } = useParams();
  const queryClient = useQueryClient();

  const form = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceTakingDate: undefined,
      address: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data) =>
      request({ method: "post", url: `bookings/${serviceId}`, data }),
    onSuccess: () => {
      toast.success("Booking successful!");
      onBookingComplete();
      queryClient.invalidateQueries(["service", slug]);
    },
    onError: () => {
      toast.error("Booking failed. Please try again.");
    },
  });

  form.watch("serviceTakingDate");

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(mutate)}>
        <FormDatePicker
          control={form.control}
          name="serviceTakingDate"
          label="Service Taking Date"
          placeholder="When do you want to get the service done?"
          disabled={isPending}
        />
        <FormInput
          control={form.control}
          name="address"
          placeholder="Enter your address"
          disabled={isPending}
        />
        <LoadingButton className="mt-5 w-full" isLoading={isPending}>
          Book
        </LoadingButton>
      </form>
    </Form>
  );
};

export default BookingForm;
