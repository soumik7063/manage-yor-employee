import React from 'react'

const Header = () => {
  return (
    <div className='p-12'> 
      <div className='flex items-end justify-between'>
        <h1 className=' text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>Soumik 👋</span></h1>
        <button className=' bg-red-500 p-3 text-xl rounded'>Log out</button>
      </div>
    </div>
  )
}

export default Header
