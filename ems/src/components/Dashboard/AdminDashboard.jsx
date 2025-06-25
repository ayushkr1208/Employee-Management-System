import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-0' style={{ backgroundColor: '#0d2b2b' }}>
            <div className="w-full py-6 px-10 bg-gradient-to-r from-orange-500 to-emerald-600 shadow-lg flex items-center justify-between rounded-b-3xl">
                <h1 className="text-3xl font-bold text-white tracking-wide">Welcome, Admin</h1>
                <Header changeUser={props.changeUser} />
            </div>
            <div className="flex flex-col md:flex-row gap-8 p-10">
                <div className="flex-1 bg-[#162e2e] rounded-2xl shadow-lg p-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Assign a New Task</h2>
                    <CreateTask />
                </div>
                <div className="flex-1 bg-[#162e2e] rounded-2xl shadow-lg p-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Employee Overview</h2>
                    <AllTask />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard