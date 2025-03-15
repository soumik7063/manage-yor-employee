import React from 'react'
import Header from '../other/Header'
import TasklistNumber from '../other/TasklistNumber'
import Tasklist from '../Tasklist/Tasklist'
const EmployeeDashboard = (props) => {
  return (
    <div className='bg-white dark:bg-gray-800 h-screen'>
      <Header changeUser = {props.changeUser} data ={props.data}/>
      <TasklistNumber data ={props.data}/>
      <Tasklist data ={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
