import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signOut } from 'next-auth/react'
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export default function SignOut(props:Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onClick'>) {
  return (
    <button {...props}
    onClick={(e) => {
        e.preventDefault()
        signOut()
    }}>
    <FontAwesomeIcon icon={faSignOut} />
    <span>Sign out</span>
</button>
  )
}
