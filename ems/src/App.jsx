import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)
  const [loginMode, setLoginMode] = useState(null); // 'admin' or 'employee'

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])

  useEffect(() => {
    // Listen for changes in employees data in localStorage
    const interval = setInterval(() => {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        setLoggedInUserData(userData.data);
      }
    }, 1000); // Poll every second
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (email, password) => {
    // Get admin data from localStorage
    const adminData = JSON.parse(localStorage.getItem('admin'))?.[0];
    if (loginMode === 'admin' && adminData && email === adminData.email && password === adminData.password) {
      setUser('admin');
      setLoginMode(null);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminData }));
    } else if (loginMode === 'employee' && userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        setLoginMode(null);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }

  if (!user) {
    if (!loginMode) {
      // Landing UI with Admin/Employee buttons
      return (
        <div className="flex h-screen w-screen bg-[#0d2b2b] items-center justify-center">
          <div className="flex flex-col gap-8 items-center justify-center bg-[#0d2b2b] p-16 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-white mb-8">Employee Management System</h1>
            <div className="flex gap-8">
              <button onClick={() => setLoginMode('admin')} className="bg-orange-500 hover:bg-orange-700 text-white font-semibold text-2xl py-4 px-10 rounded-lg shadow">Admin</button>
              <button onClick={() => setLoginMode('employee')} className="bg-emerald-600 hover:bg-emerald-800 text-white font-semibold text-2xl py-4 px-10 rounded-lg shadow">Employee</button>
            </div>
          </div>
        </div>
      );
    } else {
      // Show the correct login window
      return <Login handleLogin={handleLogin} mode={loginMode} onBack={() => setLoginMode(null)} />;
    }
  }

  return (
    <>
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App