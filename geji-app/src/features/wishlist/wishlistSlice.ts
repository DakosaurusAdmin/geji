import { createSlice } from "@reduxjs/toolkit"
import type {WishList, WishListItem} from '@/types/WishList'



const wishlistSlice = createSlice({

    name: "wishlist",
    initialState: [],

    reducers: {
        initializeWishList: (state:WishList, action:{type:string, payload:WishList}) => {
           Object.assign(state, action.payload)
        },

        wishListAdded(state: WishList, action:{type:string, payload:WishListItem}) {
            state.push({
                ...action.payload
            })
        },
        wishListDeleted(state:WishList, action:{type:string,payload:Pick<WishListItem, 'id'>}) {
            // add implementation here
        }
    }
})

export default wishlistSlice;