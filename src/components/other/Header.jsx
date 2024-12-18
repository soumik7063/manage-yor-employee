import React from 'react'

const Header = ({data}) => {
  console.log(data)
  const loggedOutUser = ()=>{
    localStorage.setItem('loggedinUser','')
    window.location.reload();
  }
  return (
    <div className='p-12'> 
      <div className='flex items-end justify-between'>
        <h1 className=' text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{data.firstname} 👋</span></h1>
        <button onClick={loggedOutUser} className=' bg-red-500 p-3 text-xl rounded'>Log out</button>
      </div>
    </div>
  )
}

export default Header
