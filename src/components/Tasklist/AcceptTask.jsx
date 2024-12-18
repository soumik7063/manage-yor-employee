import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-blue-400 rounded-xl p-5 mx-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4>{data.date}</h4>
            </div>
            <h2 className='mt-3 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>

        <div className='flex m-4 justify-between'>
        <button className='py-1 px-2 bg-green-500 ' >completed</button>
        <button className='py-1 px-2 bg-red-500 ' >failed</button>
        </div>
        </div>
  )
}

export default AcceptTask
