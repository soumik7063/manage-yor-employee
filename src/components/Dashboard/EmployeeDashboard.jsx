import React from 'react'
import Header from '../other/Header'
import TasklistNumber from '../other/TasklistNumber'
import Tasklist from '../Tasklist/Tasklist'
const EmployeeDashboard = (props) => {
  return (
    <div>
      <Header changeUser = {props.changeUser} data ={props.data}/>
      <TasklistNumber data ={props.data}/>
      <Tasklist data ={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
