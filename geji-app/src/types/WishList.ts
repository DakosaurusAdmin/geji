export interface WishListItem {
    id: string,
    name: string,
    url: string,
    price: number,
    quantity: number,
    neededByDate: Date
}


export type WishList  = Array<WishListItem>;

