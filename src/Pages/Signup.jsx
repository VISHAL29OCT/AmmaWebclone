import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()

  const HandleSignup = (e) => {
    e.preventDefault()
    navigate("/login")
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 px-4'>

      <form 
        onSubmit={HandleSignup}
        className='bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm overflow-y-auto'
      >

        <h2 className='text-xl sm:text-2xl font-semibold text-center mb-2'>
          Sign Up Here
        </h2>

        <p className='text-sm text-gray-500 text-center mb-6'>
          Please fill in the information below:
        </p>

        <div className='flex flex-col gap-4'>

          <input type="text" placeholder='First Name'
            className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
          />

          <input type="text" placeholder='Last Name'
            className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
          />

          <input type="email" placeholder='E-mail'
            className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
          />

          <input
            type="password"
            placeholder='Password'
            className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
          />

          <button 
            type="submit"
            className='bg-black text-white py-2 rounded-md hover:bg-gray-800 transition'
          >
            CREATE ACCOUNT
          </button>

        </div>

        <p className='text-center mt-4 text-sm'>
          Already have an account?{" "}
          <Link to="/login" className='text-blue-500 hover:underline'>
            Sign In
          </Link>
        </p>

      </form>

    </div>
  )
}

export default Signup