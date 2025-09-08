import { Link } from "@tanstack/react-router"


function Notfound() {
  return (
    <div className='flex flex-col mt-4 justify-center max-w-4xl mx-auto items-center text-center py-20 rounded-md bg-white shadow-lg'>
        <h1 className="text-gray-800 text-xl mb-4 font-bold">404</h1>
        <p className="text-gray-600 text-sm">Ooop! page you are looking for is not available</p>
        <Link to='/' className="mt-4 bg-blue-600 text-white rounded-md text-center px-6 py-2 cursor-pointer hover:bg-blue-700 transition">
        Go Back Home
        </Link>
    </div>
  )
}

export default Notfound