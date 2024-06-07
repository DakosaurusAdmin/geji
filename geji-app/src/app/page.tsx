export default function Home() {
  return (
    <div className="flex flex-col flex-1 m-auto mt-20">
      {/* Title */}
      <div className="m-auto mb-4">
        <h1 className="m-auto text-6xl text-gray-900">Welcome to Geji.com! </h1>
        <p className="mb-20 mt-5 pl-2"> 
         <span className="text-slate-700 text-2xl">Find your product, </span>
          <span className="text-yellow-900 text-xl">Add to cart</span> 
          <span className="text-green-800 text-2xl"> and Recieve... </span>  
          <a href="#" className=" text-blue-700  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto  text-center">learn more</a></p>
      </div>
      {/* Search Control */}
      <input className=" bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block
      m-auto w-2/3 p-4 border-solid" type="text" placeholder="Search for products..." />
    </div>
  );
}
