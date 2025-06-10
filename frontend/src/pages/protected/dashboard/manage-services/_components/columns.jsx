import Image from "@/image";
import { formatDate, formatPrice } from "@/lib/utils";
import { CellAction } from "./cell-action";

export const columns = [
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => (
      <Image src={row.original.imageUrl} height={50} width={70} className="min-w-[70px]" />
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => formatPrice(row.original.price),
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
    cell: ({ row }) => formatDate(row.original.createdAt),
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => <CellAction service={row.original} />,
  },
];
