import React from 'react'

const TasklistNumber = () => {
  return (
    <div className='flex mt-5 justify-between gap-5'>
       <div className='rounded-xl w-[45%] h-40 bg-red-400 py-5 px-10 mx-5'>
        <h1 className=' text-3xl font-semibold'>0</h1>
        <h2 className=' text-xl font-medium'>New Task</h2>
       </div>
       <div className='rounded-xl w-[45%] h-40 bg-blue-400 py-5 px-10 mx-5'>
        <h1 className=' text-3xl font-semibold'>0</h1>
        <h2 className=' text-xl font-medium'>Completed Task</h2>
       </div>
       <div className=' rounded-xl w-[45%] h-40 bg-green-400 py-5 px-10 mx-5'>
        <h1 className=' text-black text-3xl font-semibold'>0</h1>
        <h2 className=' text-black text-xl font-medium'>Accepted Task</h2>
       </div>
       <div className='rounded-xl w-[45%] h-40 bg-pink-400 py-5 px-10 mx-5'>
        <h1 className=' text-3xl font-semibold'>0</h1>
        <h2 className=' text-xl font-medium'>Failed Task</h2>
       </div>
    </div>
  )
}
export default TasklistNumber
