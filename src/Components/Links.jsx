import React from 'react'

const Links = () => {
  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-10 mt-10'>

      
        <div>
          <h2 className='font-semibold'>QUICK LINKS</h2>

          <div className='flex flex-col gap-2 mt-3 cursor-pointer text-sm'>
            <p>Press & Media</p>
            <p>Store Locator</p>
            <p>Our Story</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Blogs</p>
            <p>Request Exchange</p>
            <p>SHOP ALL</p>
          </div>
        </div>

  
        <div>
          <h2 className='font-semibold'>POLICY LINKS</h2>

          <div className='flex flex-col gap-2 mt-3 cursor-pointer text-sm'>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Shipping Policy</p>
            <p>Exchange & Repair Policy</p>
            <p>FAQ</p>
          </div>
        </div>

   
        <div>
          <h2 className='font-semibold'>CONTACT US</h2>

          <div className='flex flex-col gap-2 mt-3 text-sm'>
            <p className='font-semibold'>
              Order status, delivery issues related queries
            </p>

            <p>
              email us at:{' '}
              <span className='font-light hover:underline cursor-pointer'>
                customercare@amama.in
              </span>
            </p>

            <p className='font-serif'>Mon - Fri (10 AM - 6 PM)</p>

            <div className='mt-3'>
              <p className='font-semibold'>Exchange & Replacement:</p>

              <p className='underline font-light cursor-pointer'>
                Book your exchange here
              </p>

              <p className='text-xs mt-1'>
                Note: Exchange request should be raised within 7 days of delivery
              </p>
            </div>
          </div>
        </div>

    
        <div>
          <h2 className='font-semibold'>NEWSLETTERS</h2>

          <div className='flex flex-col gap-2 mt-3 text-sm'>
            <p>Sign Up to get our latest updates & offers</p>

            <input
              type="email"
              placeholder='E-mail'
              className='border py-2 px-4 w-full'
            />

           
            <button className="relative bg-black border border-black text-white px-8 py-2 overflow-hidden group w-full">
              <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-black">
                SUBSCRIBE
              </span>
            </button>
          </div>
        </div>

      </div>

      <hr className='mt-7' />
    </>
  )
}

export default Links