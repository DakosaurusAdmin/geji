import { createSlice } from "@reduxjs/toolkit"
import type {WishList, WishListItem} from '@/types/WishList'
import { RootState } from "@/lib/store"



const wishlistSlice = createSlice({

    name: "wishlist",
    initialState: [],

    reducers: {
        initializeWishList: (state:WishList, action:{type:string, payload:WishList}) => {
           Object.assign(state, action.payload)
        },

        addWishList(state: WishList, action:{type:string, payload:WishListItem}) {
            state.push({
                ...action.payload
            })
        },
        updateWishList(state: WishList, action:{type:string, payload:WishListItem}){
            state = [...state, action.payload]
        },
        deleteWishList(state:WishList, action:{type:string,payload:Pick<WishListItem, 'id'>}) {
            Object.assign(state, state.filter(s => s.id !== action.payload.id));
            // add implementation here
        }
    }
})

export const {addWishList, deleteWishList, initializeWishList} = wishlistSlice.actions
export const selectWishList = (state: RootState) => state.wishLists
export default wishlistSlice;