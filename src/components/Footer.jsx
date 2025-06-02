import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='font- text-5xl flex justify-between items-center px-[150px] w-full h-[150px]  border-3 border-amber-300 bg-linear-to-b from-cyan-400 to-white rounded-3xl'>
            <h1>1 Artist</h1>
            <h1>50<sup>+</sup>Products</h1>
            <h1>1K<sup>+</sup>Orders</h1>
            <h1>20<sup>+</sup>Locations</h1>
        </div>
          <div className=' w-full h-[350px] border-3 border-amber-300 flex justify-between px-[80px] py-[50px] bg-linear-to-b from-cyan-400 to-white rounded-3xl'>
            <div>
               <h1 className='text-3xl font-semibold mb-4'>Address</h1>
               <p className='text-xl'>Address: U-56, 1st Floor, Someshwar<br/>Square, Near Someshwar Circle.<br/>Vesu, Surat, Gujarat,<br/>Mail Id: sales@tulsiresin.com<br/> Bharat: +91 7874968651<br/> Monday to Saturday - 10:00 am <br/>-6:30 pm</p>
            </div>
            <div>
               <h1 className='text-3xl font-semibold mb-4'>Collections</h1>
               <ul  className="list-disc pl-5 text-xl">
                 <li>Shop</li>
                 <li>New Arrivals</li>
                 <li>Rakhi</li>
                 <li>Offers</li>
                 <li>Calculator</li>
                 <li>More Info</li>
               </ul>
            </div>
            <div>
               <h1 className='text-3xl font-semibold mb-4'>Information</h1>
                <ul className="list-disc pl-5 text-xl">
                  <li>International Shipping</li>
                  <li>Privacy Policy</li>
                  <li>Shipping Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Refund & Cancellation Policy</li>
                  <li>Track Your Order</li>
                </ul>
            </div>
            <div className='flex flex-col items-center'>
               <div className='w-[200px] h-[200px] bg-gray-400 mb-10'></div>
                <div className='flex gap-5'>
                  {/* <h1></h1>
                  <h1>Facebook</h1>
                  <h1>twitter</h1> className='text-linear-to-r from-amber-300 to-pink-600'
                  <h1>twitter</h1> 
                  <h1>Youtube</h1> */}
                  <h1 className='text-4xl bg-cyan-200 border border-black p-1 rounded text-pink-600'><i  class="ri-instagram-line"></i></h1>
                  <h1 className='text-4xl bg-cyan-200 border border-black p-1 rounded text-blue-600'><i class="ri-facebook-fill"></i></h1>
                  <h1 className='text-4xl bg-cyan-200 border border-black p-1 rounded'><i class="ri-twitter-x-fill"></i></h1>
                  <h1 className='text-4xl bg-cyan-200 border border-black p-1 rounded text-red-500'><i class="ri-youtube-fill"></i></h1>
                </div>
            </div>
        </div>

        <div className='w-full h-[50px] border-3  border-amber-300 bg-linear-to-b from-cyan-400 to-white rounded-b-3xl'>
          <p className='text-center px-4 py-2 text-xl'><i class="ri-copyright-line"></i>2025 The --- With ❤️ By SkyRoute Solution</p>
        </div>
    </footer>
  )
}

export default Footer