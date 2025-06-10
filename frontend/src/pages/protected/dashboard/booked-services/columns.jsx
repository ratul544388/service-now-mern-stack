import Image from "@/image";
import { formatDate } from "@/lib/utils";

export const columns = [
  {
    accessorKey: "service",
    header: "Service Info",
    cell: ({ row }) => {
      const { service } = row.original;
      return (
        <div className="flex items-center gap-2">
          <Image src={service.imageUrl} height={50} width={70} />
          <div>
            <h5>{service.title}</h5>
            <p className="text-muted-foreground text-sm">{service.category}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "bookedBy",
    header: "Booked By",
    cell: ({ row }) => {
      const {
        user: { name, imageUrl, email },
      } = row.original;
      return (
        <div className="flex items-center gap-2">
          <img src={imageUrl} alt={name} className="size-9 rounded-full" />
          <div>
            <p>{name}</p>
            <p className="text-muted-foreground text-sm">{email}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "ServiceTakingDate",
    header: "Service Taking Date",
    cell: ({row}) => formatDate(row.original.serviceTakingDate)
  }
];
