import React from 'react'
import { partner_logos } from '../assets/assets'

const Partnership = () => {
  return (
    <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>
     <h3 className='font-semibold'>Companies Who Trust Our Expertise</h3> 
     <div className='flex items-center justify-center flex-wrap gap-10 m-4'>
          {partner_logos.map((logo, index)=>(
               <img key={index} src={logo} alt="" className='max-h-5 sm:max-h-6 ' />
          ))}
     </div>
    </div>
  )
}

export default Partnership