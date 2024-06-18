// import SearchForm from '../components/SearchForm';
import Login from '@/components/Login';



export default function Home() {
  return (

    <div className="flex flex-col m-auto my-32 justify-center">
      {/* <h1>Welcome to Geji.com! </h1> */}
      <h1 className="m-auto mt-32">
        {/* Title */}
        <span className="text-red-700">Ge</span>
        <span className="text-yellow-700">ji</span>
        <span className="text-green-800">!</span>
        {/* <a className="btn-secondary" href="#">
            Learn more</a> */}
      </h1>
      <div className='m-auto mt-5'>
        <Login/>
      </div>
          {/* Search Control */}
          {/* <div className='w-full p-4 sm:w-1/2 mx-auto'>
        <SearchForm />
      </div> */}
        </div>



          );
}
