import React from 'react'
import Cards from './Cards'
import resList from '../utils/cardData'

const Card_container = () => {
  return (
    <div className='flex flex-wrap'>
      {
        resList.map((restraunt)=>(
          <Cards key={restraunt.data.id} resData = {restraunt} />
        ))
      }
    </div>
  )
}

export default Card_container
