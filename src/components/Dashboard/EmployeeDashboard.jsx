import React from 'react'
import Header from '../other/Header'
import TasklistNumber from '../other/TasklistNumber'
import Tasklist from '../Tasklist/Tasklist'
const EmployeeDashboard = () => {
  return (
    <div>
      <Header/>
      <TasklistNumber/>
      <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard
