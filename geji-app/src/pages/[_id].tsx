import Link from 'next/link'
import React from 'react'

export default function DynamicPage() {
  return (
    <div className='m-auto text-2xl text-yellow-700 text-center'>
        Page under construction!
        <Link className="btn btn-accent w-1/2" href="/">Return Home</Link>
    </div>
  )
}
