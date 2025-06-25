import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const task = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }
        const data = userData.map((elem) => {
            if (asignTo === elem.firstName) {
                const newTasks = [...elem.tasks, task];
                return {
                    ...elem,
                    tasks: newTasks,
                    taskCounts: {
                        newTask: newTasks.filter(t => t.newTask).length,
                        active: newTasks.filter(t => t.active).length,
                        completed: newTasks.filter(t => t.completed).length,
                        failed: newTasks.filter(t => t.failed).length,
                    }
                }
            }
            return elem
        })
        setUserData(data)
        localStorage.setItem('employees', JSON.stringify(data))

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='bg-[#1c1c1c] rounded-2xl shadow-lg p-8'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between gap-8'>
                <div className='w-full md:w-1/2'>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-base py-2 px-4 w-full rounded-lg outline-none bg-[#162e2e] border-2 border-gray-600 focus:border-orange-500 text-white mb-2 transition' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-base py-2 px-4 w-full rounded-lg outline-none bg-[#162e2e] border-2 border-gray-600 focus:border-orange-500 text-white mb-2 transition' type="date" />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className='text-base py-2 px-4 w-full rounded-lg outline-none bg-[#162e2e] border-2 border-gray-600 focus:border-orange-500 text-white mb-2 transition' type="text" placeholder='employee name' />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-base py-2 px-4 w-full rounded-lg outline-none bg-[#162e2e] border-2 border-gray-600 focus:border-orange-500 text-white mb-2 transition' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>
                <div className='w-full md:w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full h-44 text-base py-2 px-4 rounded-lg outline-none bg-[#162e2e] border-2 border-gray-600 focus:border-orange-500 text-white mb-2 transition' />
                    <button className='bg-gradient-to-r from-orange-500 to-emerald-600 py-3 hover:opacity-90 px-5 rounded-lg text-base mt-4 w-full text-white font-semibold shadow-lg transition'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask