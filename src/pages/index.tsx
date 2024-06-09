import SearchForm from '../components/SearchForm'

export default function Home() {
  return (
    <>
      {/* Title */}
      <div className="mt-40 mb-10 mx-auto">
        {/* <h1>Welcome to Geji.com! </h1> */}
        <h1 className="mt-5 pl-2">
          <span className="text-red-700">Ge</span>
          <span className="text-yellow-700">ji</span>
          <span className="text-green-800">!</span>
          {/* <a className="btn-secondary" href="#">
            Learn more</a> */}
          </h1>
      </div>
      
      {/* Search Control */}
      <div className='w-1/2 mx-auto'>
      <SearchForm/>
      </div>




      {/* <input className=" bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block
      m-auto w-2/3 p-4 border-solid" type="text" placeholder="Search for products..." /> */}
    </>
  );
}
