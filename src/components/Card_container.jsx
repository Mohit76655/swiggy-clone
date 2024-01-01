import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import resList from '../utils/cardData'

const Card_container = () => {
  const [listOfRestraunt, setlistOfRestraunt] = useState(resList);
  const [SearchText, setSearchText] = useState("")

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.9124336&lng=75.7872709&carousel=true&third_party_vendor=1");

    const json = await data.json();
    console.log(json);

    setlistOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  



  return (
    <div className='flex flex-wrap items-center'>
      <div className="search flex w-full justify-center gap-4 m-2">
        <input className='w-full p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ' placeholder="Search...." type="text" value={SearchText} onChange={(e) =>{
          setSearchText(e.target.value)
        }} />
        <button className=' bg-sky-500 p-1 w-20 rounded-lg text-white hover:bg-green-500' onClick={()=>{
          const filterRes = listOfRestraunt.filter((resList) => resList.data.name.includes(SearchText));

          setlistOfRestraunt(filterRes)
        }}>Search</button>
      </div>
      {
        listOfRestraunt.map((restraunt)=>(
          <Cards key={restraunt.data.id} resData = {restraunt} />
        ))
      }
    </div>
  )
}

export default Card_container
