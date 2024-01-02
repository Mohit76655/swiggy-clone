import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className="flex items-center justify-center flex-col mt-52">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-orange-500 ">404</h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
        <p className="mb-4 text-lg font-light text-gray-600">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
        <Link className=" rounded-md text-white bg-gray-900 h-8 hover:bg-orange-500 hover:scale-95 ease-in-out duration-200 w-24 text-center p-1" to="/">Home</Link>
    </div>
    </>
  )
}

export default Error
