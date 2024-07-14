"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { WishListItem } from "@/types/WishList";
import { Checkbox } from "@radix-ui/react-checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import React from "react";

// eslint-disable-next-line react/display-name
const MyButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => (
    <button {...props} ref={forwardedRef} />
  ));
  
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// const columns: ColumnDef<WishListItem>[] = [
    

//   {
//     accessorKey: "name",
//     header: "Name",
//   },

//   {
//     accessorKey: "quantity",
//     header: "Quantity",
//   },
//   {
//     accessorKey: "price",
//     // header: "Price",
//     header: () => <div className="text-right">Price</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("price"))
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount)
 
//       return <div className="text-right font-medium">{formatted}</div>
//     },
//   },
//   {
//     id: "actions",
//     enableHiding: false,
//     cell: ({ row }) => {
//         const payment = row.original

//         return (
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <MyButton variant="ghost" className="h-8 w-8 p-0">
//                 <span className="sr-only">Open menu</span>
//                 <MoreHorizontal className="h-4 w-4" />
//               </MyButton>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//               <DropdownMenuItem
//                 onClick={() => navigator.clipboard.writeText(payment.id)}
//               >
//                 Copy payment ID
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>View customer</DropdownMenuItem>
//               <DropdownMenuItem>View payment details</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//       )
//     },
//   },




// //   {
// //     accessorKey: "neededByDate",
// //     header: "NeededBy",
// //   },
// ];

export const columns: ColumnDef<WishListItem>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default columns;