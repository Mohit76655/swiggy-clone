import React from 'react'
import Cards from './Cards'
import resList from '../utils/cardData'

const Card_container = () => {
  return (
    <div>
      <Cards resData = {resList}/>
    </div>
  )
}

export default Card_container
