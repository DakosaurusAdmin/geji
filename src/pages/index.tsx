import SearchForm from '../components/SearchForm'

export default function Home() {
  return (
    <>
      {/* Title */}
      <div className="mt-40 mb-10 mx-auto">
        <h1>Welcome to Geji.com! </h1>
        <p className="mt-5 pl-2">
          <span className="text-red-700 text-2xl">Find your product, </span>
          <span className="text-yellow-700 text-xl">Add to cart</span>
          <span className="text-green-800 text-2xl"> and Recieve... </span>
          <a className="btn-secondary" href="#">
            Learn more</a>
          {/* <a href="#" className=" text-blue-700  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto  text-center">learn more</a> */}
        </p>
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
