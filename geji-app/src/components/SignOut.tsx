import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import React from "react";
import WrappedDialog from "./WrappedDialog";

export default function SignOut() {
  return (
    <WrappedDialog
      triggerButtonProps={{
        title: "Sign out",
        icon: faSignOut,
      }}
      title="Sign Out"
      description="Are you sure you want to log off?"
      saveButtonProps={{
        title: "Sign out",
        icon: faSignOut,
        onClick: (e) => {
          e.preventDefault();
          signOut({ callbackUrl: "/", redirect: true });
        },
      }}
    />
  );
}
