import { RootState } from "@/lib/store";
import { WishListEvents } from "@/types/Notification";
import { WishList } from "@/types/WishList";
import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "wishlist",
    initialState: {values:[]  as WishListEvents[]},
    reducers: {
        initializeNotifications: (state, action:{type:string, payload:WishListEvents[]}) => {
            state.values = action.payload
        },
        setIsSeen: (state, action:{type:string, payload:Pick<WishListEvents,'id'>}) => {
            state.values.forEach(n=> {
                if(n.id === action.payload.id) {
                    n.seen = true
                }
            })
        },
        addNotification: (state, action:{type:string, payload:Omit<WishListEvents,"id">} ) => {
            state.values.push({ id: `${state.values.length +1}`, ...action.payload});
        }

    }

});

export const {setIsSeen, initializeNotifications, addNotification} = notificationSlice.actions;
export const selectNotifications = (state: RootState) => state.notifications.values;

export const selectUnseenNotifications = (state: RootState) => state.notifications.values.filter(n=>!n.seen);
export default notificationSlice;