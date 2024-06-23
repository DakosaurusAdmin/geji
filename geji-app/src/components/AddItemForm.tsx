"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { login } from "@/lib/auth";

import React, { useState } from "react";
import { providerMap } from "@/pages/api/auth/[...nextauth]";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faSignIn } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { addWishList } from "@/features/wishlist/wishlistSlice";
import { useAppDispatch } from "@/lib/hooks";
import { addNotification } from "@/features/notifications/notificationsSlice";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Item Name is Required",
      description: "Name to identify the item",
    })
    .min(4, {
      message: "Item Name should be atleast 4 chars",
    }),
  url: z
    .string({
      required_error: "Item Url for purchase is required",
      description: "url",
    })
    .min(8, { message: "Missing Item Url" }), // do more validation
  price: z.coerce.number({
    required_error: "Item price must be specified",
    description: "item price in USD",
    invalid_type_error: "item price must be a number"
  }),
  quantity: z.coerce.number({
    required_error: "Item quanity must be specified",
    description: "the Item quantity needed.",
     invalid_type_error: "item quantity must be a number"
  }),
  neededByDate: z.coerce.date({
    description: "specify the date needed by",
  }).min(new Date()),
});

export function AddItemForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = async (item: z.infer<typeof formSchema> | undefined) => {
    try {
      console.log("Adding Item...");
      // const response = await login(providerId, { ...values });
      dispatch(
        addWishList({
          id: "newIt",
          url: item?.url || "",
          name: item?.name || "",
          price: item?.price || 0,
          quantity: item?.quantity || 0,
          status: "pending",
          neededByDate: item?.neededByDate,
        })
      );

      dispatch(
        addNotification({
          message: "new Item added",
          priority: 'low',
          seen:false
        })
      );
    } finally {
    }
  };

  return (
    <div className="flex flex-col gap-4 m-auto">
      {error && (
        <Alert variant="destructive" className="flex flex-row">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="item name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL:</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Url" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price:</FormLabel>
                <FormControl>
                  <Input {...field}   placeholder="" />
                </FormControl>
              </FormItem>
              )}
              />
            <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity:</FormLabel>
                <FormControl>
                  <Input {...field}  placeholder="1" />
                </FormControl>
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="neededByDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Needed By Date:</FormLabel>
                <FormControl>
                  <Input {...field}  type="date"  value={
                      field.value instanceof Date
                        ? field.value.toISOString().split('T')[0]
                        : field.value
                    } />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="w-full gap-2" type="submit">
            <FontAwesomeIcon icon={faAdd} />
            <span>Add To Wish list</span>
          </Button>
          <div className="w-full border-b-gray-300 " />
        </form>
      </Form>
    </div>
  );
}
