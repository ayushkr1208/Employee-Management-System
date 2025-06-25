import React, { useState, useEffect } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  const [userData, setUserData] = useState(props.data);

  useEffect(() => {
    setUserData(props.data);
  }, [props.data]);

  // Helper to recalculate taskCounts
  const recalculateTaskCounts = (tasks) => {
    return {
      newTask: tasks.filter(t => t.newTask).length,
      active: tasks.filter(t => t.active).length,
      completed: tasks.filter(t => t.completed).length,
      failed: tasks.filter(t => t.failed).length,
    };
  };

  // Helper to update localStorage and state
  const updateTasks = (tasks) => {
    const taskCounts = recalculateTaskCounts(tasks);
    const updatedUser = { ...userData, tasks, taskCounts };
    setUserData(updatedUser);
    // Update loggedInUser in localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    localStorage.setItem('loggedInUser', JSON.stringify({ ...loggedInUser, data: updatedUser }));
    // Also update employees in localStorage
    const employees = JSON.parse(localStorage.getItem('employees'));
    const idx = employees.findIndex(e => e.email === updatedUser.email);
    if (idx !== -1) {
      employees[idx] = updatedUser;
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  };

  const handleAcceptTask = (index) => {
    const tasks = userData.tasks.map((task, i) => i === index ? { ...task, newTask: false, active: true } : task);
    updateTasks(tasks);
  };

  const handleCompleteTask = (index) => {
    const tasks = userData.tasks.map((task, i) => i === index ? { ...task, completed: true, active: false, failed: false, newTask: false } : task);
    updateTasks(tasks);
  };

  const handleFailTask = (index) => {
    const tasks = userData.tasks.map((task, i) => i === index ? { ...task, failed: true, active: false, completed: false, newTask: false } : task);
    updateTasks(tasks);
  };

  return (
    <div className='h-screen w-full p-0' style={{ backgroundColor: '#0d2b2b' }}>
      <div className="w-full py-6 px-10 bg-gradient-to-r from-emerald-600 to-orange-500 shadow-lg flex items-center justify-between rounded-b-3xl">
        <h1 className="text-3xl font-bold text-white tracking-wide">Welcome, {userData?.firstName || 'Employee'}</h1>
        <Header changeUser={props.changeUser} data={userData}/>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <TaskListNumbers data={userData} />
        </div>
        <div className="bg-[#162e2e] rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold text-white mb-4">Your Tasks</h2>
          <TaskList data={userData} onAccept={handleAcceptTask} onComplete={handleCompleteTask} onFail={handleFailTask} />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard