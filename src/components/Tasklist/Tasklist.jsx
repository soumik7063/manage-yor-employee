import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className='flex flex-nowrap overflow-x-auto items-center justify-start h-72 w-full py-5 mt-10 gap-5'>
       {data.tasks.map((elem)=>{
        if(elem.active){
          return <AcceptTask/>
        }
        if(elem.newTask){
          return <NewTask/>
        }
        if(elem.completed){
          return <CompleteTask/>
        }
        if(elem.failed){
          return <FailedTask/>
        }
       })}
    </div>
  )
}

export default Tasklist
