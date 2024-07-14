import SearchForm from '@/components/SearchForm'
import { useRouter } from 'next/router';
import React from 'react'

export default function SearchResults() {
  const router = useRouter();
 console.log(router);
  return (
    <div className="my-20">
      <SearchForm/>
      <h1 className="mt-20">Search Results</h1>
    </div>
  )
}
