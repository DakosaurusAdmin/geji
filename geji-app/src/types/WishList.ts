export interface WishListItem {
    id: string,
    name: string,
    url: string,
    price: number,
    quantity: number,
    neededByDate?: Date,
    status: 'pending' | 'delivered' | 'complete'
}


export type WishList  = Array<WishListItem>;

