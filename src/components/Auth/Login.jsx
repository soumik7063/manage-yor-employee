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
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 w-3/12 border-emerald-500 rounded-xl' >
            <form
              onSubmit={(e)=>{
                SubmitHandler(e);
              }}
             className='flex flex-col items-center justify-center px-9 py-16'>
                <input 
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                className='text-l text-black my-4 text-center border-2 border-emerald-600 py-3 px-5 rounded-full' type="text" placeholder='Enter your email'/>
                <input 
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
