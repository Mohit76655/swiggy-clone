import React from 'react'

const Cards = () => {
  return (
    <>
    <div className="flex flex-wrap">
      <div className=" flex flex-wrap m-2 shadow-xl">
      <div className=" bg-slate-100 w-60 rounded-lg  p-2 flex flex-col  flex-wrap">
        <img className='object-cover rounded-md h-40 hover:scale-95 ease-in duration-200' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/myvxh31oyzxtm01tmydw" alt="res_img" />
        <div className="flex items-center justify-between">
        <h2 className='font-bold m-2'>Heading</h2>
        <h3 className=" font-semibold  flex gap-2 "><i className='ri-star-fill text-green-500 hover:text-orange-500'></i>4.2</h3>
        </div>
        <p className=' text-slate-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, odit inventore!</p>
        <button className="mt-1 mb-1 rounded-md text-white bg-sky-600 h-8 hover:bg-green-500 hover:scale-95 ease-in-out duration-200">Order</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Cards
