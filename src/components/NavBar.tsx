import Link from 'next/link';
import React, { useState } from 'react';

const MenuItems = () => {
    return (
        [
            {
                path:'/login',
                value:"Login"
            },
            {
                path:'/cart',
                value:"Cart (0)"
            }
        ].map(m =>
            <Link href={m.path} className="block text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >{m.value} </Link>)
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => { setIsOpen(!isOpen); };
    return (<nav className='w-full'>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 mr-10 lg:px-8">
            <div className="relative flex items-center justify-between h-16 w-full mr-0">
                <div className="absolute inset-y-0 left-full flex items-center sm:hidden mx-0">
                    <button onClick={toggleMenu} type="button" 
                    className="inline-flex items-center justify-center p-2 rounded-md
                     text-gray-700 hover:text-white
                      hover:bg-gray-300 focus:outline-none focus:ring-2 
                      focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={isOpen} >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ?
                            (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>) :
                            (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /> </svg>)}
                    </button> </div> <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    {/* <div className="flex-shrink-0">
                        <img className="h-8 w-8" src="https://tailwindcss.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                    </div> */}
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <MenuItems />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={` ${isOpen ? 'block' : 'hidden'} sm:hidden absolute right-0 bg-gray-100 leading-10`} id="mobile-menu">
            <div className="pr-10 pt-2 pb-3 space-y-1 leading-10">
                <MenuItems />
            </div>
        </div>
    </nav>);
}; export default Navbar;