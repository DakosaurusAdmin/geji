import React from 'react'
import NavBar from './NavBar'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'
import SignOut from './SignOut'

export default function Header() {
  const { data: session, status } = useSession()
  return (
    <header className='bg-gray-100 shadow-lg flex pr-2'>
      <NavBar />
      <div className='flex justify-start'>
      {
        !session &&
        <button  type="button" className='btn btn-primary rounded-full'
        onClick={(e) => {
          e.preventDefault()
          signIn()
      }}>
      {/* <img loading="lazy" height="24" width="24" id="provider-logo" src={`https://authjs.dev/img/providers/${p.id}.svg`} /> */}
      <FontAwesomeIcon icon={faSignIn}/>
      <span className="flex-1">Sign in</span>
  </button>}
      {
        session?.user &&
        <>
          {/* <span
            style={{ backgroundImage: `url(${session.user.image})` }}
            className='avatar'
          />
          <span className='text-xs'>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.name}</strong>
          </span> */}

          <span className='text-xs flex flex-col flex-1 space-y-0 m-auto mx-2 text-center'>
            <small>Welcome!</small>
            <strong>{session.user.name}</strong>
          </span>
          <div className="dropdown">
            <div className="dropdown avatar online placeholder">
              <div tabIndex={0} role="button" className="bg-neutral text-neutral-content rounded-full w-12">
                <img src={session.user.image || ''} alt={session.user.name || ''} />
              </div>
            </div>

            <ul tabIndex={4} className="menu dropdown-content mt-3 min-w-max z-[1] p-2 shadow rounded-box flex -left-12">
              <SignOut className="btn btn-sm"/>
            </ul>
          </div>
          </>
        
      }
      </div>

    </header>)
}
