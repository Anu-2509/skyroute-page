import React from 'react'

const ProductCard = ({title, image, description, price}) => {
  return (
    <div>
       <div className=' '>
        <img src={image} alt="" className='object-cover w-full  h-[300px] sm:h-[350px] rounded-4xl' />
       </div>
       <div className='flex justify-between mt-1 p-2'>
         <h3 className='text-lg sm:text-xl font-semibold'>{title}</h3>
         <p className='text-lg sm:text-xl font-semibold'>${price}</p>
       </div>
       <p className='text-sm sm:text-md text-center'>{description}</p>
    </div>
  )
}

export default ProductCard