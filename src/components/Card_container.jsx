import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import resList from '../utils/cardData'

const Card_container = () => {
  const [listOfRestraunt, setlistOfRestraunt] = useState(resList);

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
    <div className='flex flex-wrap'>
      {
        listOfRestraunt.map((restraunt)=>(
          <Cards key={restraunt.data.id} resData = {restraunt} />
        ))
      }
    </div>
  )
}

export default Card_container
