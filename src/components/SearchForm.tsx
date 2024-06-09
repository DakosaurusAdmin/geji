import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'

export default function SearchForm() {
  const [query, setQuery] = useState('')
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    //const data = await response.json()
    // ...
    router.push('/search-results')
  }
  
  return (
    <form className="w-full" onSubmit={onSubmit}>
    <label htmlFor="default-search" className="mb-2 text-lg font-medium text-gray-900 sr-only">Search</label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

      </div>
      {/* -- Search input */}
      <input type="search" name="query" id="default-search" className='form-input'
        placeholder="Search items..." autoFocus={true} 
        onChange={e => setQuery(e.target.value)}/>
      <button type="submit" className="btn-primary absolute top-2 bottom-2 flex p-4 m-auto">        {/* -- Search Icon */}
        <svg className="w-4 h-4 text-white m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg></button>
    </div>
  </form>
  )
}
