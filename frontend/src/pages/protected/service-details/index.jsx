import PageLoader from "@/components/page-loader";
import Image from "@/image";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { BookServiceButton } from "./book-service-button";
import useAuthStore from "@/hooks/use-auth-store";
import CancelBooking from "./_components/cancel-booking";

const ServiceDetails = () => {
  const { slug } = useParams();
  const { user } = useAuthStore();

  const { data: service, isPending } = useQuery({
    queryKey: ["service", slug],
    queryFn: () => request({ url: `services/${slug}` }),
  });

  if (isPending) {
    return <PageLoader />;
  }

  const isBookedByMe = service.bookings.some((b) => b.user.id === user.id);

  return (
    <>
      <div className="mb-6">
        <Image src={service.imageUrl} alt={service.title} width={500} />
        <h1 className="mt-3 text-3xl font-bold">{service.title}</h1>
        <p className="mt-1 text-muted-foreground text-sm">{service.category}</p>
        <p className="text-muted-foreground mt-3">{service.description}</p>
        <div className="mt-5 flex items-center gap-3">
          <img
            src={service.provider.imageUrl}
            alt={service.provider.name}
            className="size-10 rounded-full"
          />
          <div>
            <p className="font-medium">{service.provider.name}</p>
            <p className="text-muted-foreground text-sm">
              {service.provider.email}
            </p>
          </div>
        </div>
        <address className="text-primary mt-3">{service.address}</address>
        <p className="mt-3 text-xl font-semibold">Price: ${service.price}</p>
        {isBookedByMe ? (
          <CancelBooking service={service} />
        ) : (
          <BookServiceButton service={service} />
        )}
      </div>
    </>
  );
};

export default ServiceDetails;
