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
    <div className='p-10 h-screen' style={{ backgroundColor: '#0d2b2b' }}>
        <Header changeUser={props.changeUser} data={userData}/>
        <TaskListNumbers data={userData} />
        <TaskList data={userData} onAccept={handleAcceptTask} onComplete={handleCompleteTask} onFail={handleFailTask} />
    </div>
  )
}

export default EmployeeDashboard