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
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";

const formSchema = z.object({
  username: z
    .string({
      required_error: "Username is required!",
      description: "username",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),
  password: z
    .string({
      required_error: "Password is Required!",
      description: "password",
    })
    .min(1, { message: "Missing password" }),
});

export function SignInFormV2() {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit =
    (providerId: string) =>
    async (values: z.infer<typeof formSchema> | undefined) => {
      try {
        console.log("Attempting login...");
        const response = await login(providerId, { ...values });
        if (response.success) {
          router.push("/secure");
        }
        setError(response.error);
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
      {providerMap.map((p) => (
        <div key={p.id}>
          {p.id === "credentials" && (
            <Form key={p.id} {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit(p.id))}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username:</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="username" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password:</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="password"
                          type="password"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button className="w-full gap-2" type="submit">
                  <FontAwesomeIcon icon={faSignIn} />
                  <span>{`Sign in with ${p.id}`}</span>
                </Button>
                <div className="w-full border-b-gray-300 " />
              </form>
            </Form>
          )}

          {p.id !== "credentials" && (
            <Button
              className="w-full gap-2"
              variant={"outline"}
              type="button"
              onClick={async (e) => {
                  e.preventDefault(); 
                  await onSubmit(p.id)({username:"", password:""});
                }}
            >
              <Image
                loading="lazy"
                height="24"
                width={24}
                id="provider-logo"
                src={`https://authjs.dev/img/providers/${p.id}.svg`}
                alt={`${p.id} SignIn`}
              />
              <span>{`Sign in with ${p.id}`}</span>
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}
