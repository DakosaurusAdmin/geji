import { useAppSelector } from '@/lib/hooks'
import { WishList } from '@/types/WishList'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function ProtectedPage() {
  const {data:session}  = useSession();
  const wishLists:WishList = useAppSelector(state => state.wishListReducer)
  return (
    <div>
        <h1 className='text-center m-auto my-10 text-2xl'>{`Welcome ${session?.user?.name}`}</h1>
        {
          wishLists.map(
            w => <div key={w.id}>{w.name}</div>
          )
        }

    </div>
  )
}
