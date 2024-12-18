import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({data}) => {
  return (
    <div>
      <Header data ={data}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
