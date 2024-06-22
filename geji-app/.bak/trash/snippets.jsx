"use client";
import { getData } from "@/data";
import { useAppSelector } from "@/lib/hooks";
import { DataTable } from "@/model/wishlist/DataTable";
import { columns } from "@/model/wishlist/columns";
import { WishListItem } from "@/types/WishList";
import React, { useEffect, useState } from "react";


// const MyDataTabel = React.forwardRef(function dt(props, forwardedRef) {
//   return <DataTable {...props} ref={forwardedRef} />
// });

export default function ProtectedPage() {
  const [data, setData] = useState<WishListItem[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      setData(response);
    }

    fetchData();
  }, [setData]);

  // const wishLists: WishList = useAppSelector((state) => state.wishListReducer);
  return (
    // <div>
    //     <h1 className='text-center m-auto my-10 text-2xl'>{`Welcome ${session?.user?.name}`}</h1>
    //     {
    //       wishLists.map(
    //         w => <div key={w.id}>{w.name}</div>
    //       )
    //     }

    // </div>

    <div className="w-full">
      <div className="rounded-md border">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
