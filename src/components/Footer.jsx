import React from 'react'

const Footer = () => {
  return (
    <footer>
       <div className='flex flex-wrap justify-center sm:justify-around items-center  gap-4 px-4 sm:px-10 md:px-[100px] py-6 w-full border-3 border-amber-300 bg-gradient-to-b from-cyan-400 to-white rounded-3xl text-2xl sm:text-4xl md:text-5xl font-semibold text-center'>
          <h1>1 Artist</h1>
          <h1>50<sup>+</sup>Products</h1>
          <h1>1K<sup>+</sup>Orders</h1>
          <h1>20<sup>+</sup>Locations</h1>
        </div>
        <div className='w-full border-3 border-amber-300 bg-gradient-to-b from-cyan-400 to-white rounded-3xl flex flex-col md:flex-row gap-10 md:gap-8 px-4 sm:px-10 md:px-[80px] py-10'>
            
            <div className="flex-1 min-w-[220px]">
               <h1 className='text-2xl sm:text-3xl font-semibold mb-4'>Address</h1>
                <p className='text-base sm:text-xl leading-realxed'>
                   Address: U-56, 1st Floor, Someshwar<br/>
                   Square, Near Someshwar Circle.<br/>
                   Vesu, Surat, Gujarat,<br/>
                   Mail Id: sales@tulsiresin.com<br/>
                   Bharat: +91 7874968651<br/> 
                   Monday to Saturday - 10:00 am - 6:30 pm
                </p>
            </div>

            <div className="flex-1 min-w-[180px]">
               <h1 className='text-2xl sm:text-3xl font-semibold mb-4'>Collections</h1>
               <ul  className="list-disc pl-5 text-base sm:text-xl space-y-1">
                 <li>Shop</li>
                 <li>New Arrivals</li>
                 <li>Rakhi</li>
                 <li>Offers</li>
                 <li>Calculator</li>
                 <li>More Info</li>
               </ul>
            </div>

            <div  className="flex-1 min-w-[180px]">
               <h1 className='text-2xl sm:text-3xl  font-semibold mb-4'>Information</h1>
                <ul className="list-disc pl-5 text-base sm:text-xl space-y-1">
                  <li>International Shipping</li>
                  <li>Privacy Policy</li>
                  <li>Shipping Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Refund & Cancellation Policy</li>
                  <li>Track Your Order</li>
                </ul>
            </div>

            <div className='flex flex-col items-center flex-1 min-w-[200px]'>
              <div className='w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] bg-gray-400 mb-6 rounded-2xl'></div>
                <div className='flex gap-4 justify-center flex-wrap'>
                  <h1 className='text-3xl sm:text-4xl bg-cyan-200 border border-black p-1 rounded text-pink-600'><i  class="ri-instagram-line"></i></h1>
                  <h1 className='text-3xl sm:text-4xl bg-cyan-200 border border-black p-1 rounded text-blue-600'><i class="ri-facebook-fill"></i></h1>
                  <h1 className='text-3xl sm:text-4xl bg-cyan-200 border border-black p-1 rounded'><i class="ri-twitter-x-fill"></i></h1>
                  <h1 className='text-3xl sm:text-4xl bg-cyan-200 border border-black p-1 rounded text-red-500'><i class="ri-youtube-fill"></i></h1>
                </div>
            </div>
        </div>

          <div className='w-full border-3  border-amber-300 bg-gradient-to-b from-cyan-400 to-white rounded-b-3xl'>
          <p className='text-center px-4 py-3 text-sm sm:text-lg'>
             <i class="ri-copyright-line"></i>
             2025 The --- With ❤️ By SkyRoute Solution
          </p>
        </div>
    </footer>
  )
}

export default Footer