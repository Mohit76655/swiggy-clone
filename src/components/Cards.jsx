import React from 'react'
import resList from '../utils/cardData'

const Cards = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    id,
    costForTwo,
    avgRatingString,
    cuisines
    
  } = resData?.data;
  return (
    <>
    <div className="flex flex-wrap">
      <div className=" flex flex-wrap m-2 shadow-xl">
      <div className=" bg-slate-100 w-60 rounded-lg  p-2 flex flex-col  flex-wrap">
        <img className='object-cover rounded-md h-40 hover:scale-95 ease-in duration-200' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res_img" />
        <div className="flex items-center justify-between">
        <h2 className='font-bold m-2'>{name}</h2>
        <h3 className=" font-semibold  flex gap-2 "><i className='ri-star-fill text-green-500 hover:text-orange-500'></i>{avgRatingString}</h3>
        </div>
        <p className=' text-slate-500'>{cuisines}</p>
        <button className="mt-1 mb-1 rounded-md text-white bg-sky-600 h-8 hover:bg-green-500 hover:scale-95 ease-in-out duration-200">{costForTwo}</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Cards
