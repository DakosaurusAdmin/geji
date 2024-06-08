import React from 'react'

export default function Header() {
    return (
        <header className="bg-gray-100 flex rounded-md pl-4">
            <div className="h-20 items-center flex flex-1 text-blue-500">
                <h2>BrandLogo</h2>
            </div>
            <nav className='flex flex-1 justify-end'>
                <a className="ml-2" href="#">Home</a>
                <a className="ml-2" href="#">Contact</a>
                <a className="ml-2" href="#">Account</a>
            </nav>
            <div className=" mx-10 justify-end">
                <span>Cart (0)</span>
            </div>
        </header>
    )
}
