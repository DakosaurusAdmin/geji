import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import React from 'react'

export default function SignOut() {
   return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2"><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>Sign Off</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign Off</DialogTitle>
          <DialogDescription>
            Are you sure you want to log off?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={(e)=> {
              e.preventDefault();
              signOut({ callbackUrl: '/', redirect:true })
          }}>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
