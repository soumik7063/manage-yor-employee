import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const SubmitHandler = (e)=>{
    e.preventDefault();
    console.log('Email is ',email)
    console.log('password is ',password)
    handleLogin(email,password)
    setEmail('')
    setpassword('')
  }
  const [email,setEmail] = useState('');
  const [password,setpassword] = useState('');


  return (
    <div className='flex h-screen een items-center justify-center bg-white dark:bg-gray-800 transition-colors duration-500 ease-in-out'> 
        <div className='border-2 w-auto border-emerald-500 rounded-xl' >
            <form
              onSubmit={(e)=>{
                SubmitHandler(e);
              }}
             className='flex flex-col items-center justify-center px-9 py-16'>
                <input 
                autoComplete='section-blue shipping address-level2'
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                className='text-l text-black my-4 text-center border-2 border-emerald-600 py-3 px-5 rounded-full' type="text" placeholder='Enter your email'/>
                <input 
                autoComplete='current-password webauthn'
                value={password}
                onChange={(e)=>{
                  setpassword(e.target.value)
                }}
                className='text-l text-black text-center border-2 border-emerald-600 py-3 px-5 rounded-full' type="password" placeholder='Enter your Password' />
                <button className='mt-4 text-center border-2 bg-emerald-600 py-3 px-5 rounded-full' >Log in</button>
            </form>
        </div>
    </div>
  ) 
}

export default Login
