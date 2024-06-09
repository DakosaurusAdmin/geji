import Link from 'next/link'
import React from 'react'

export default function DynamicPage() {
  return (
    <div className='m-auto text-2xl text-yellow-700'>
        Page under construction!
        <Link className="btn-secondary flex justify-center" href="/">Return Home</Link>
    </div>
  )
}
