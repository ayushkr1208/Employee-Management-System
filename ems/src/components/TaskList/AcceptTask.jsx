import React from 'react'

const AcceptTask = ({data, index, onComplete, onFail}) => {
  return (
    <div className='rounded-2xl shadow-lg bg-gradient-to-br from-red-400 to-orange-200 p-6 flex flex-col h-full min-h-[320px]'>
      <div className='flex justify-between items-center mb-2'>
        <span className='bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold'>{data.category}</span>
        <span className='text-xs text-gray-700 font-medium'>{data.taskDate}</span>
      </div>
      <h2 className='mt-2 text-xl font-bold text-gray-900'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-gray-800 flex-1'>{data.taskDescription}</p>
      <div className='flex justify-between gap-2 mt-6'>
        <button className='flex-1 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold py-2 px-3 text-xs shadow transition' onClick={() => onComplete(index)}>Mark as Completed</button>
        <button className='flex-1 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold py-2 px-3 text-xs shadow transition' onClick={() => onFail(index)}>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask