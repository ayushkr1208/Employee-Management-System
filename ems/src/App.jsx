import React, { useContext } from 'react'
import { useEffect,useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
function App() {

    const [user, setUser] = useState('')
    const authData = useContext(AuthContext)

    // useEffect(() => {
    //   if(authData){
    //     const loggedInUser = localStorage.getItem("LoggedInUser")
    //   }
    
      
    // }, [authData])
    

    const handleLogin=(email,password)=>{
      if(email=='admin@me.com' && password=='123'){
        setUser('admin')
      }
      else if(authData && authData.employees.find((e)=>email==e.email && password==e.password)){
        setUser('employee')
      }
      else alert("Invalid")
    }


    

  return (
    <>
      {!user? <Login handleLogin={handleLogin}/> :''}
      {user=='admin'?<AdminDashboard/>:<EmployeeDashboard/>}
      
    </>
  )
}

export default App