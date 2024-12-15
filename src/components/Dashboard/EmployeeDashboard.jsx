import React from 'react'
import Header from '../other/Header'
import TasklistNumber from '../other/TasklistNumber'
import Tasklist from '../Tasklist/Tasklist'
const EmployeeDashboard = ({data}) => {
  return (
    <div>
      <Header data ={data}/>
      <TasklistNumber data ={data}/>
      <Tasklist data ={data}/>
    </div>
  )
}

export default EmployeeDashboard
