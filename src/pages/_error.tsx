import Link from 'next/link'
 
export default function Error({ statusCode }){
  return (
    <div className='m-auto'>
      <h2 className='text-3xl text-red-600'>Error</h2>
      <p>
      {statusCode
        ? `${statusCode} | Error occured preventing application to properly function`
        : 'An unknown error occured on the application. please refresh!'}
    </p>
      <Link className="btn-secondary" href="/">Return Home</Link>
    </div>
  )
}