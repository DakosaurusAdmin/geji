"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
// import columns from "@/model/wishlist/columns";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { WishListItem } from "@/types/WishList"
import { getData } from "@/data"
import DataTable from "@/model/wishlist/DataTable"
import { useAppDispatch } from "@/lib/hooks"
import wishlistSlice, { selectWishList } from "@/features/wishlist/wishlistSlice"
import { useSelector } from "react-redux"

const columns: ColumnDef<WishListItem>[] = [
    

  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "price",
    // header: "Price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"))
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


export default function DashBoard() {

  // const [data, setData] = React.useState<WishListItem[]>([]);

  const  dispatch = useAppDispatch();
  const data  = useSelector(selectWishList)

  React.useEffect(() => {
    async function fetchData() {
      const response = await getData();
      dispatch(wishlistSlice.actions.initializeWishList(response));
    }

    fetchData();
  }, [dispatch]);

  return (
    <DataTable data={data} />
  )
}
