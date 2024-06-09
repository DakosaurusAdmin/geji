import React from 'react'
import Navbar from './NavBar'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-gray-100 flex w-full rounded-md px-4">
            <div className="h-20 items-center flex flex-1 text-slate-500">
                <Link href="/"><h2 className='text-2xl hover:underline'>Geji</h2></Link>
            </div>
            {/* <nav className='flex flex-1 justify-end'>
                <a className="ml-2" href="#">Home</a>
                <a className="ml-2" href="#">Contact</a>
                <a className="ml-2" href="#">Account</a>
            </nav> */}
            <div className='flex flex-1'>
                <Navbar />
            </div>

        </header>
    )
}
