import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full h-[500px] bg-gray-400 rounded-b-4xl relative">
        <img className='w-full h-full bg-cover rounded-b-4xl' src="https://plus.unsplash.com/premium_photo-1664304466416-435c9bc9d1db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRTVU5BTUl8ZW58MHx8MHx8fDA%3D" alt="" />
        <div className='w-full absolute top-0 p-4 md:p-10 mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
           <div className="w-full md:w-1/3">
             <input 
              type="text" 
              placeholder='Search'
              className='w-full border border-black px-4 py-2 rounded-full text-sm md:text-base text-black font-semibold bg-cyan-50'
           />
           </div>
           <div className="w-full md:w-1/3 flex justify-center">
              <nav className='flex flex-wrap justify-center items-center gap-2 sm:gap-4 bg-cyan-50 border border-black px-4 py-3 rounded-full text-sm md:text-base text-black font-semibold'>
                <a href="#" className="text-gray-700 hover:text-cyan-300 transition">Home</a>
                <a href="#" className="text-gray-700 hover:text-cyan-300 transition">Categories</a>
                <a href="#" className="inline-flex items-center text-gray-700 hover:text-cyan-300 transition border border-black rounded-full px-3 py-1 h-8 text-sm">Shop</a>
                <a href="#" className="text-gray-700 hover:text-cyan-300 transition">Gallery</a>
                <a href="#" className="text-gray-700 hover:text-cyan-300 transition">Services</a>
                <a href="#" className="text-gray-700 hover:text-cyan-300 transition">Contact Us</a>
              </nav>
           </div>
           <div className='w-full md:w-1/3 flex justify-end gap-3'>
              <button className='border-1 border-black px-4 bg-cyan-50 rounded-2xl text-sm md:text-base text-blach font-semibold'>Log In</button>
              <button className='border-1 border-black px-4 bg-cyan-50 rounded-2xl text-sm md:text-base text-blach font-semibold'>Sign Up</button>
           </div>
        </div>
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   text-3xl md:text-6xl text-white'>Shop</h1>
    </header>
  )
}

export default Navbar