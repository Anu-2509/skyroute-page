import React from 'react'
import Navbar from '../src/components/Navbar'
import products from './data/products'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
       <Navbar/>
       <main className= "max-w-7xl mx-auto px-4 py-10 sm:px-6 md:px-8">
          <h1 className='text-4xl sm:text-5xl md:text-6xl  font-bold text-center text-gray-800 mt-2'>All Products</h1>
          <button className='border-2 border-black text-black text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 font-semibold mt-12 rounded-full bg-cyan-300'>Show Filter</button>
          <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 '>
             {products.map((product) => (
              <ProductCard 
               key={product.id}
               title={product.title}
               description={product.description}
               price={product.price}
               image={product.image}
            />
          ))}
         </div>
         <div className='text-center mt-10'>
          <button className="bg-cyan-300 px-5 py-3 text-black text-2xl font-semibold rounded-full">Load More <i class="ri-arrow-down-s-line"></i></button>
         </div>
      </main>
          <Footer />
    </div>
  )
}

export default App