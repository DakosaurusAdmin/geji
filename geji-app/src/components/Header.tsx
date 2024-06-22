import React from "react";
import NavBar from "./NavBar";
import { signIn, signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import SignOut from "./SignOut";
import Image from "next/image";
import SignIn from "@/pages/signIn";
import { Button } from "./ui/button";

export default function Header() {
  const { data: session, status } = useSession();
  return (
    <header className="bg-gray-100 shadow-lg flex pr-2">
      <NavBar />
      <div className="flex justify-start mr-4 align-center">
        {!session && (
          <Button
            className="m-auto gap-2"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            {/* <img loading="lazy" height="24" width="24" id="provider-logo" src={`https://authjs.dev/img/providers/${p.id}.svg`} /> */}
            <FontAwesomeIcon icon={faSignIn} size="sm" />
            <span className="flex-1">Sign in</span>
          </Button>
        )}
        {session?.user && (
          <>
            <span className="text-xs hidden sm:flex flex-col flex-1 space-y-0 m-auto mx-2 text-center">
              <small>Welcome!</small>
              <strong>{session.user.name}</strong>
            </span>
            <div className="dropdown m-auto">
              <div className="dropdown avatar online placeholder">
                <div
                  tabIndex={0}
                  role="button"
                  className="bg-neutral text-neutral-content rounded-full w-12"
                >
                  <Image
                    src={session.user.image || ""}
                    alt={session.user.name || ""}
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              <ul
                tabIndex={4}
                className="menu dropdown-content bg-base-100 mt-3 min-w-max z-[1] p-2 shadow rounded-box flex -left-12"
              >
                <SignOut/>
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
