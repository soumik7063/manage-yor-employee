import { useContext, useEffect } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import TasklistNumber from "./components/other/TasklistNumber"
import { getLocalStorage, setLocalStorage } from "./ulits/LocalStorage"
import { useState } from "react"
import { AuthContext } from "./context/AuthProvider"

const App = ()=>{

 const [user,setuser] = useState(null)
 const Authdata = useContext(AuthContext)
  const handleLogin=(email,password)=>{
    if(Authdata && Authdata.admin.email == email){
      setuser('admin')
      console.log(user);
    }
    else if(Authdata && Authdata.employees.find((e)=> email == e.email ) && e.password == password){
      setuser('employee')
      console.log(user);
    }
    else alert("Invalid credentials ")
  }
  // useEffect(()=>{
  //   setLocalStorage();
  //   const data =getLocalStorage();
  //   console.log(data)
  // })
  
  return (
    <div> 
      {(!user)?<Login handleLogin ={handleLogin}/>:''}
      {(user=="admin")?<AdminDashboard/>:<EmployeeDashboard/>}
    </div>
  )
}

export default App