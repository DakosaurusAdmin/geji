export interface WishListEvents  {

    id:string,
    message: string,
    priority: 'critical' | 'high' | 'medium' | 'low',
    seen:boolean
}