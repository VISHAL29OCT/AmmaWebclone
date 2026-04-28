import React from 'react'

const Categories = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center mt-7'>

        <h2 className='font-semibold text-2xl sm:text-3xl mt-7 mb-5'>
          SHOP BY CATEGORIES
        </h2>

        <div className='flex flex-wrap justify-center gap-2  w-full max-w-6xl'>

          {/* CARD */}
          <div className='w-[45%] sm:w-[25%] md:w-[23%] h-64 sm:h-72 md:h-80 overflow-hidden group'>
            <img
              src="image51.webp"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className='w-[45%] sm:w-[25%] md:w-[23%] h-64 sm:h-72 md:h-80 overflow-hidden group'>
            <img
              src="image50.webp"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className='w-[45%] sm:w-[25%] md:w-[23%] h-64 sm:h-72 md:h-80 overflow-hidden group'>
            <img
              src="image53.webp"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className='w-[45%] sm:w-[25%] md:w-[23%] h-64 sm:h-72 md:h-80 overflow-hidden group'>
            <img
              src="image54.webp"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

        </div>
      </div>

      <hr className='mt-7' />
    </>
  )
}

export default Categories