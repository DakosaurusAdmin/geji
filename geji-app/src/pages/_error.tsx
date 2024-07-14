import { ErrorProps } from 'next/error'
import Link from 'next/link'
 
export default function Error({ statusCode }:ErrorProps){
  return (
    <div className='m-auto'>
      <h2 className='text-3xl text-red-600'>{statusCode ?   'Error' : '404 | Not Found'}</h2>
      <p>
      {statusCode
        ? `${statusCode} | Error occured preventing application to properly function`
        : ''}
    </p>
      <Link className="btn-secondary" href="/">Return Home</Link>
    </div>
  )
}