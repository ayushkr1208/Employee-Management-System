import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-[#1c1c1c] rounded-xl shadow-lg'>
        <thead>
          <tr className='bg-gradient-to-r from-orange-500 to-emerald-600 text-white'>
            <th className='py-3 px-4 rounded-tl-xl text-left'>Employee Name</th>
            <th className='py-3 px-4 text-left'>New Task</th>
            <th className='py-3 px-4 text-left'>Active Task</th>
            <th className='py-3 px-4 text-left'>Completed</th>
            <th className='py-3 px-4 rounded-tr-xl text-left'>Failed</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.map(function(elem,idx){
            return (
              <tr key={idx} className='border-b border-emerald-700 hover:bg-[#223838] transition'>
                <td className='py-3 px-4 text-white font-semibold'>{elem.firstName}</td>
                <td className='py-3 px-4 text-blue-400 font-bold'>{elem.taskCounts.newTask}</td>
                <td className='py-3 px-4 text-yellow-400 font-bold'>{elem.taskCounts.active}</td>
                <td className='py-3 px-4 text-green-400 font-bold'>{elem.taskCounts.completed}</td>
                <td className='py-3 px-4 text-red-400 font-bold'>{elem.taskCounts.failed}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AllTask