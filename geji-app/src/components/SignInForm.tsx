"use client";
import React, { FormEvent, useState } from "react";
import { providerMap } from "@/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { login } from "@/lib/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@headlessui/react";
import { useRouter } from "next/router";

export default function SignInForm() {
  const { data: session } = useSession();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (
    e: FormEvent<HTMLFormElement>,
    providerId: string
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login(providerId, new FormData(e.currentTarget));
      setError(response.error);
      console.log("login response : ", response);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="card justify-center m-auto signIn">
      {!loading && error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      {!session &&
        providerMap.map((p, idx) => (
          <form
            key={p.id}
            onSubmit={(e) => onSubmit(e, p.id)}
            className="flex flex-col gap-2"
          >
            {p.id === "credentials" && (
              <>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <Input
                    type="text"
                    className="grow"
                    placeholder="Username"
                    required
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="password"
                    required
                  />
                </label>
              </>
            )}

            <button
              key={p.id}
              type="submit"
              className="btn btn-lg w-full m-auto"
            >
              {p.id !== "credentials" && (
                <Image
                  loading="lazy"
                  height="24"
                  width={24}
                  id="provider-logo"
                  src={`https://authjs.dev/img/providers/${p.id}.svg`}
                  alt="Google SignIn"
                />
              )}

              {p.id === "credentials" && <FontAwesomeIcon icon={faSignIn} />}
              <span>{`Sign in with ${p.id}`}</span>
            </button>
            {idx < providerMap.length - 1 && (
              <hr className="relative my-8 flex justify-center overflow-visible" />
            )}
          </form>
        ))}
      {/* {session  &&   <button type="button" className="btn btn-lg "
                onClick={(e) => {
                    e.preventDefault()
                    signOut()
                }}>
                <FontAwesomeIcon icon={faSignOut} />
                <span>Sign out</span>
            </button>
            } */}
    </div>
  );
}
