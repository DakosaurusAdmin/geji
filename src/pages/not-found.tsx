import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='m-auto'>
      <h2 className='text-3xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="btn-secondary" href="/">Return Home</Link>
    </div>
  )
}