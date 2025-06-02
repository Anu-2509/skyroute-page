// import React from 'react'

// const ProductCard = ({ title, description, price, image }) => {
//   return (
//   <div className='w-[300px] h-[400px] bg-gray-300 relative'>
//     <div>
//       <img
//         src={image}
//         alt={title}
//         className="w-[250px] h-[350px] object-cover rounded-4xl mb-4"
//       />
//     </div>
//       <div className='flex justify-between items-center mt-5'>
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="mt-2 text-lg font-semibold text-black">₹{price}</p>
//       </div>
//       <p className="text-sm text-gray-600 ">{description}</p>
//   </div>
// )
// }

// export default ProductCard
// import React from 'react'

// const ProductCard = ({title, image, description, price}) => {
//   return (
//     <div className='w-[400px] h-[500px] bg-gray-300 relative flex gap-5'>
//       <img 
//         src={image}
//         alt={title} 
//         className='w-[250px] h-[350px] '
//       /> 
//       <div className='flex justify-between items-center'>
//          <h3 className="">{title}</h3>
//          <p className="">₹{price}</p>
//        </div>
//          <p className=" ">{description}</p>
//     </div>
//   )
// }

// export default ProductCard
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