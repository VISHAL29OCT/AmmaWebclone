import React from 'react'

const Notice = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center px-4 py-10 text-center'>

        <h2 className='font-bold text-2xl sm:text-3xl cursor-pointer border-b border-black pb-1 hover:border-transparent transition duration-300'>
          AMAMA BRANDS
        </h2>

        <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-gray-700">
          Explore handpicked brands, ranging from everyday premium styles to festive occasion wear and discover unique finds at 
          <span className="font-semibold text-black"> Amama Brands.</span>
        </p>

      </div>

      <hr className='mt-2' />
    </>
  )
}

export default Notice