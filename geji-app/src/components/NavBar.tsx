import { faBell, faEnvelope, faIdBadge, faMessage, faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faCircle, faMailReply } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { ComponentProps } from 'react'
import {useSession } from 'next-auth/react'



const NavLinks = () => {
    return (
        [
            {
                path: '/',
                name: 'Home'
            },
            {
                path: '/contact',
                name: 'Contact'

            },

        ].map(l =>

            <li key={l.name} ><Link href={l.path} className="text-gray-700 m-auto">{l.name}</Link></li>
            //block text-gray-700
            //  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm 
            //  font-medium

        )
    )
}

const UserLinks = () => {
    return ([
        {
            path: '/messages',
            name: `messages`,
            icon: faEnvelope,
            alerts:109
        },
        // {
        //     path: '/cart',
        //     name: 'Cart',
        //     icon: faCartShopping
        // },
        {
            path: '/notifications',
            name: 'Notifications',
            icon: faBell,
            alerts:2
        }

    ].map(s =>
        <Link href={s.path} key={s.name} className="btn btn-ghost btn-circle tooltip tooltip-info tooltip-bottom flex" data-tip={s.name}>
            <div className="relative indicator">
            {s.alerts &&
                <span className="indicator-item badge badge-error rounded-full badge-md text-xs p-1">{s.alerts > 99 ? '99+' : s.alerts}</span> 
                }
                <FontAwesomeIcon icon={s.icon} size='2x' fontWeight='400'/>
               
            </div>
        </Link>

    ))
}

export default function NavBar() {
    const { data: session, status } = useSession()
    return (
        <div className="navbar">
            <div className="sm:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={4} className="menu dropdown-content bg-base-100 mt-3 z-[1] p-2 shadow rounded-box flex">
                        <NavLinks />
                    </ul>
                </div>
            </div>
            <div className="flex-1 sm:navbar-start">
                <Link href="/" className="btn btn-ghost text-xl m-auto">
                    <div>
                        <span className="text-red-700">Ge</span>
                        <span className="text-yellow-700">ji</span>
                        <span className="text-green-800">!</span>
                    </div>

                </Link>
            </div>
            <div className="navbar-end sm:navbar">
                <ul className="menu menu-horizontal hidden sm:flex">
                    <NavLinks />
                </ul>
                {session && 
                    <ul className="menu menu-horizontal">
                        <UserLinks />
                    </ul>
                }
            </div>

        </div>
    )
}
