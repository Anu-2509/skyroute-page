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