import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authdata = useContext(AuthContext)
  console.log(authdata);

  return (
    <div className='bg-[#1C1C1C] p-5 mx-10 rounded mt-5'>
      <div className='bg-red-400 border-solid flex justify-between px-4 py-2 mb-2 rounded'>
        <h2 className='w-1/5  text-lg font-medium text-center' >Employee name</h2> 
        <h3 className='w-1/5  text-lg font-medium text-center'>New Task</h3>
        <h5 className='w-1/5  text-lg font-medium text-center'>Active task</h5>
        <h5 className='w-1/5  text-lg font-medium text-center'>Completed task</h5>
        <h5 className='w-1/5  text-lg font-medium text-center'>failed Task</h5>
      </div>
      {authdata.employees.map(function(elem,idx){
        return <div className='border-2 border-emerald-900 flex justify-between px-4 py-2 mb-2 rounded'>
        <h2 className='w-1/5  text-lg font-medium text-center' >{elem.firstname}</h2> 
        <h3 className='w-1/5  text-lg font-medium text-center text-blue-500'>{elem.taskCounts.newTask}</h3>
        <h5 className='w-1/5  text-lg font-medium text-center text-yellow-500'>{elem.taskCounts.active}</h5>
        <h5 className='w-1/5  text-lg font-medium text-center text-green-500'>{elem.taskCounts.completed}</h5>
        <h5 className='w-1/5  text-lg font-medium text-center text-red-500'>{elem.taskCounts.failed}</h5>
      </div>
      })}
      
    </div>
  )
}

export default AllTask
