import React from 'react'
import { FaTasks, FaCheckCircle, FaClipboardList, FaTimesCircle } from 'react-icons/fa'

const TaskListNumbers = ({data}) => {
  return (
    <>
      <div className='rounded-2xl py-8 px-6 bg-gradient-to-br from-blue-500 to-blue-300 shadow-lg flex flex-col items-center justify-center'>
        <FaClipboardList className='text-4xl text-white mb-2'/>
        <h2 className='text-3xl font-bold text-white'>{data.taskCounts.newTask}</h2>
        <h3 className='text-lg mt-1 font-medium text-white'>New Task</h3>
      </div>
      <div className='rounded-2xl py-8 px-6 bg-gradient-to-br from-green-500 to-green-300 shadow-lg flex flex-col items-center justify-center'>
        <FaCheckCircle className='text-4xl text-white mb-2'/>
        <h2 className='text-3xl font-bold text-white'>{data.taskCounts.completed}</h2>
        <h3 className='text-lg mt-1 font-medium text-white'>Completed</h3>
      </div>
      <div className='rounded-2xl py-8 px-6 bg-gradient-to-br from-yellow-400 to-yellow-200 shadow-lg flex flex-col items-center justify-center'>
        <FaTasks className='text-4xl text-black mb-2'/>
        <h2 className='text-3xl text-black font-bold'>{data.taskCounts.active}</h2>
        <h3 className='text-lg mt-1 text-black font-medium'>Accepted</h3>
      </div>
      <div className='rounded-2xl py-8 px-6 bg-gradient-to-br from-red-500 to-red-300 shadow-lg flex flex-col items-center justify-center'>
        <FaTimesCircle className='text-4xl text-white mb-2'/>
        <h2 className='text-3xl font-bold text-white'>{data.taskCounts.failed}</h2>
        <h3 className='text-lg mt-1 font-medium text-white'>Failed</h3>
      </div>
    </>
  )
}

export default TaskListNumbers