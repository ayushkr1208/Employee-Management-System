import React from 'react'

const NewTask = ({data, index, onAccept}) => {
    return (
        <div className='rounded-2xl shadow-lg bg-gradient-to-br from-green-400 to-blue-200 p-6 flex flex-col h-full min-h-[320px]'>
            <div className='flex justify-between items-center mb-2'>
                <span className='bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold'>{data.category}</span>
                <span className='text-xs text-gray-700 font-medium'>{data.taskDate}</span>
            </div>
            <h2 className='mt-2 text-xl font-bold text-gray-900'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-gray-800 flex-1'>{data.taskDescription}</p>
            <div className='mt-6'>
                <button className='w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold py-2 px-3 text-xs shadow transition' onClick={() => onAccept(index)}>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask