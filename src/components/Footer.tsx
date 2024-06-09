import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-100 hidden md:flex overflow-hidden justify-content p-10">
            <div className="flex justify-between">
                <a className="ml-2" href="#">Contact Us</a>
                <a className="ml-2" href="#">About Us</a>
                <a className="ml-2" href="#">FAQs</a>
            </div>

            {/* Replace with icons */}
            <div className="flex">
                <a className="ml-2" href="#">Facebook</a>
                <a className="ml-2" href="#">Twitter</a>
                <a className="ml-2" href="#">Instagram</a>
            </div>
            {/* <div className="flex h-fit">
        <input type="email" placeholder="Subscribe to our newsletter"/>
        <button>Subscribe</button>
    </div> */}
        </footer>
    )
}
