import { createSlice } from "@reduxjs/toolkit"
import type {WishList, WishListItem} from '@/types/WishList'
import { RootState } from "@/lib/store"



const wishlistSlice = createSlice({

    name: "wishlist",
    initialState: {values:[]  as WishListItem[]},
    reducers: {
        initializeWishList: (state, action:{type:string, payload:WishList}) => {
           state.values = action.payload
        },

        addWishList(state, action:{type:string, payload:WishListItem}) {
            state.values.push({
                ...action.payload
            })
        },
        updateWishList(state, action:{type:string, payload:WishListItem}){
            state.values = [...state.values, action.payload]
        },
        deleteWishList(state, action:{type:string,payload:Pick<WishListItem, 'id'>}) {
            state.values = state.values.filter(s => s.id !== action.payload.id);
            // add implementation here
        }
    }
})

export const {addWishList, deleteWishList, initializeWishList} = wishlistSlice.actions
export const selectWishList = (state: RootState) => state.wishList.values
export default wishlistSlice;