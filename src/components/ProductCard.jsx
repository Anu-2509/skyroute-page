import React from 'react'

const ProductCard = ({title, image, description, price}) => {
  return (
    <div>
       <div className=' '>
        <img src={image} alt="" className='object-cover w-[300px] h-[350px] rounded-4xl' />
       </div>
       <div className='flex justify-between mt-1 p-2'>
         <h3 className='text-xl font-semibold'>{title}</h3>
         <p className='text-xl font-semibold'>${price}</p>
       </div>
       <p className='font-md text-center text-md'>{description}</p>
    </div>
  )
}

export default ProductCard