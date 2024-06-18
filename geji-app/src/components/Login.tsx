import React, { useEffect, useState } from 'react'
import { providerMap } from '@/pages/api/auth/[...nextauth]'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function Login() {
    const { data: session } = useSession()
    return (<>
        {!session && providerMap.map(p =>
            <button key={p.id} type="button" className="btn btn-lg w-max"
                onClick={(e) => {
                    e.preventDefault()
                    signIn(p.id)
                }}>
                <Image loading="lazy" height="24" width="24" id="provider-logo" src={`https://authjs.dev/img/providers/${p.id}.svg`} alt="Google SignIn" />
                <span>Sign in with Google</span>
            </button>
        )}
         {/* {session  &&   <button type="button" className="btn btn-lg "
                onClick={(e) => {
                    e.preventDefault()
                    signOut()
                }}>
                <FontAwesomeIcon icon={faSignOut} />
                <span>Sign out</span>
            </button>
            } */}

    </>)
}
