import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-[#1C1C1C] p-12 mx-10 rounded'>
        <form className='flex justify-between items-center w-full px-36 '>
            <div>
                <div >
                    <h3>Task Title</h3>
                    <input className='px-2 py-1 text-sm mb-2 w-96 rounded-md ' type="text" placeholder='Make a UI design' />
                </div>
                <div>
                    <h3>Date</h3>
                    <input className='text-black px-2 py-1 text-sm mb-2 w-96 rounded-md ' type="date"/>
                </div>
                <div>
                    <h3>Assign to</h3>
                    <input className='px-2 py-1 text-sm mb-2 w-96 rounded-md ' type="text" placeholder='employee name' />
                </div>
                <div>
                    <h3>Categories</h3>
                    <input className='px-2 py-1 text-sm mb-2 w-96 rounded-md ' type="text" placeholder='dev,design etc.' />
                </div>
            </div>
            <div className='flex flex-col items-enter'>
                <h3>Description</h3>
                <textarea className= 'text-gray-900 w-96 h-44 py-2 px-4 border-gray-300 rounded-lg' ></textarea>
            <button className='text-black font-semibold bg-emerald-400 py-3 px-2 mt-3  w-25 rounded-md'>Create Task</button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask
