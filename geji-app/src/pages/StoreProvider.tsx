'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import wishListSlice from '@/features/wishlist/wishlistSlice'
import { wishListSample } from '@/data'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(wishListSlice.actions.initializeWishList(wishListSample))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}