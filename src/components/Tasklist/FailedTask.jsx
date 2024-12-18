import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-red-500 rounded-xl p-5 mx-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4>{data.date}</h4>
            </div>
            <h2 className='mt-3 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>

        <div className='flex m-4 justify-between'>
        <button className='py-1 px-2 bg-red-700 text-sm' >Failed</button>
        </div>
        </div>
  )
}

export default FailedTask
