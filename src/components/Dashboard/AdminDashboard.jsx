import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='bg-white dark:bg-gray-800 h-screen'>
      <Header changeUser = {props.changeUser} data ={props.data}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
