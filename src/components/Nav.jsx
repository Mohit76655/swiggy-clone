import React from 'react'

const Nav = () => {
  return (
    <>
    <div className="shadow-md flex justify-center gap-56 h-20 items-center bg-slate-50 sticky top-0 left-0 overflow-hidden">
      
      <div className="flex items-center">
      <img src="./Swiggy.webp" alt="" className='mix-blend-multiply w-24 mr-8' />
        <span className=' underline underline-offset-4 mr-2 font-bold hover:text-orange-500'>Other</span><span className=' text-slate-500 items-center text-center flex'>Jaipur, Rajasthan, India <i class="ri-arrow-down-s-line text-2xl text-orange-500 font-semibold"></i></span>
      </div>
      
      <ul className=' flex font-semibold items-center gap-16 max-lg:hidden z-20'>
          
        <li className=' hover:text-orange-500'><i className="ri-search-line mr-2"></i>Search</li>
        <li className=' hover:text-orange-500'><i class="ri-discount-percent-line mr-2"></i>Offers <sup className='text-orange-500 text-xs'>NEW</sup></li>
        <li className=' hover:text-orange-500'><i class="ri-lifebuoy-fill mr-2"></i>Help</li>
        <li className=' hover:text-orange-500'><i class="ri-user-line mr-2"></i>Sign In</li>
        <li className=' hover:text-orange-500'><i class="ri-shopping-cart-line mr-2"></i>Cart</li>
      </ul>
    </div>
    </>
  )
}

export default Nav
