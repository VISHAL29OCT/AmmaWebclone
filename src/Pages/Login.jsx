import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const HandleLogin = (e) => {
    e.preventDefault()
    navigate("/")
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 px-4'>

      <form 
        onSubmit={HandleLogin}
        className='bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm'
      >

        <h2 className='text-xl sm:text-2xl font-semibold text-center mb-2'>
          Login Here
        </h2>

        <p className='text-sm text-gray-500 text-center mb-6'>
          Enter your email and password
        </p>

        <div className='flex flex-col gap-4'>

          <input  
            type="email"  
            placeholder='E-mail' 
            required
            className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
          />

          <input 
            type="password" 
            placeholder='Password' 
            required
            className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
          />

          <div className='text-right'>
            <Link to="/forgot-password" className='text-sm text-blue-500 hover:underline'>
              Forgot password?
            </Link>
          </div>

          <button 
            type='submit' 
            className='bg-black text-white py-2 rounded-md hover:bg-gray-800 transition'
          >
            Login
          </button>

        </div>

        <p className='text-center mt-4 text-sm'>
          Don't have an account?{" "}
          <Link to="/signup" className='text-blue-500 hover:underline'>
            Sign up
          </Link>
        </p>

      </form>

    </div>
  )
}

export default Login