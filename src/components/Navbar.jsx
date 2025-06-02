// import React from 'react'

// const Navbar = () => {
//   return (
//     // <header className='shadow-md bg-white sticky top-0 z-50'>
//     <header className='w-full h-[500px] bg-red-100 rounded-b-4xl'>
//         <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
//           {/* Logo or Brand Name */}
//            <div className='text-xl font-bold text-indigo-600'>Shop</div>
//            {/* Nav Links */}
//            <nav className='space-x-6 hidden md:block'>
//               <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
//               <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Categories</a>
//               <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Shop</a>
//               <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Gallery</a>
//               <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
//               <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Contact Us</a>
//            </nav>
//            {/* Right Side: Search + Buttons */}
//            <div className='flex items-center space-x-4'>
//              <input 
//                 type="text" 
//                 placeholder='Search' 
//                 className='border rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
//              />
//              <button className='text-sm px-4 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition'>Sign Up</button>
//              <button className='text-sm px-4 py-1 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition'>Log In</button>
//            </div>
//         </div>
//     </header>
       
//   )
// }

// export default Navbar
import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full h-[500px] bg-gray-400 rounded-b-4xl relative">
        <img className='w-full h-full bg-cover rounded-b-4xl' src="https://plus.unsplash.com/premium_photo-1664304466416-435c9bc9d1db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRTVU5BTUl8ZW58MHx8MHx8fDA%3D" alt="" />
        <div className='w-full absolute top-0 flex justify-between p-10 mt-6'>
           <input 
              type="text" 
              placeholder='Search'
              className='border-1 border-black px-3 py-4 rounded-full text-lg text-blach font-semibold bg-cyan-50'
           />
           <nav className='border-1 border-black px-8 py-4 rounded-full text-lg text-blach font-semibold flex gap-5 bg-cyan-50'>
              <a href="#" className="text-gray-700 hover:text-cyan-300 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-cyan-300 transition">Categories</a>
              <a href="#" className="inline-flex items-center text-gray-700 hover:text-cyan-300 transition border border-black rounded-full px-4 py-1.5 h-8 text-sm">Shop</a>
              <a href="#" className="text-gray-700 hover:text-cyan-300 transition">Gallery</a>
              <a href="#" className="text-gray-700 hover:text-cyan-300 transition">Services</a>
              <a href="#" className="text-gray-700 hover:text-cyan-300 transition">Contact Us</a>
           </nav>
           <div className='flex gap-6'>
            <button className='border-1 border-black px-6 bg-cyan-50 rounded-2xl text-lg text-blach font-semibold'>Log In</button>
            <button className='border-1 border-black px-6 bg-cyan-50 rounded-2xl text-lg text-blach font-semibold'>Sign Up</button>
           </div>
        </div>
        <h1 className='absolute top-[50%] ml-[250px] text-6xl text-white'>Shop</h1>
    </header>
  )
}

export default Navbar