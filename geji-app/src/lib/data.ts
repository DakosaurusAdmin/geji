import { WishListItem } from "@/types/WishList";

export async function getData(): Promise<WishListItem[]> {

  // Replace this with real api call.
  return [
    {
      id: "1",
      name: "Awesome Nike Shoes",
      url: "http://www.amazon.com/shoes",
      price: 20.99,
      quantity: 4,
      neededByDate: new Date(),
      status: "pending",
    },
    {
        id: "2",
        name: "Leather Jacket",
        url: "http://www.amazon.com/shoes",
        price: 20.99,
        quantity: 4,
        neededByDate: new Date(),
        status: "pending",
      },
      {
        id: "3",
        name: "Kakhi Trousers",
        url: "http://www.amazon.com/shoes",
        price: 20.99,
        quantity: 4,
        neededByDate: new Date(),
        status: "pending",
      },
      {
        id: "4",
        name: "Kakhi Trousers",
        url: "http://www.amazon.com/shoes",
        price: 20.99,
        quantity: 4,
        neededByDate: new Date(),
        status: "complete",
      },
      {
        id: "5",
        name: "Drones",
        url: "http://www.amazon.com/shoes",
        price: 20.99,
        quantity: 4,
        neededByDate: new Date(),
        status: "delivered",
      },
  ];
}
