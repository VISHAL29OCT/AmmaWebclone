import React from 'react'

const Catchvideoes = () => {
    return (
        <>
      <div className='flex flex-col lg:items-center lg:justify-center mt-7'>
  
  <h2 className='text-2xl sm:text-3xl font-semibold text-center'>
    Catch the Magic of Amama!
  </h2>

  <div className="flex overflow-x-auto gap-4 px-4 pt-5 no-scrollbar">

    {/* VIDEO CARD */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-32 sm:w-36 md:w-40 h-56 sm:h-60 object-cover rounded-md shrink-0"
    >
      <source src="/video1.mp4" type="video/mp4" />
    </video>

    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-32 sm:w-36 md:w-40 h-56 sm:h-60 object-cover rounded-md shrink-0"
    >
      <source src="/video2.mp4" type="video/mp4" />
    </video>

    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-32 sm:w-36 md:w-40 h-56 sm:h-60 object-cover rounded-md shrink-0"
    >
      <source src="/video3.mp4" type="video/mp4" />
    </video>

    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-32 sm:w-36 md:w-40 h-56 sm:h-60 object-cover rounded-md shrink-0"
    >
      <source src="/video4.mp4" type="video/mp4" />
    </video>

  </div>
</div>

        </>
    )
}

export default Catchvideoes