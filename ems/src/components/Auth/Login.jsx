import React, { useState } from 'react'

const Login = ({ handleLogin, mode = 'admin', onBack }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex h-screen w-screen bg-[#0d2b2b]">
      {/* Left branding panel */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-[#0d2b2b] border-r border-[#1a3a3a]">
        <h1 className="text-4xl font-bold text-white mb-2">Employee Management System</h1>
      </div>
      {/* Right login form */}
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-[#0d2b2b] rounded-lg shadow-lg p-10">
          <h2 className="text-3xl font-semibold text-white mb-2 text-center">Welcome</h2>
          <p className="text-gray-300 text-center mb-8">
            PLEASE LOGIN TO {mode === 'admin' ? 'ADMIN' : 'EMPLOYEE'} DASHBOARD.
          </p>
          <form onSubmit={submitHandler} className="flex flex-col gap-6">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="outline-none bg-transparent border-2 border-gray-400 text-white font-medium text-lg py-3 px-6 rounded placeholder-gray-400"
              type="email"
              placeholder={mode === 'admin' ? 'Admin Email' : 'Employee Email'}
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="outline-none bg-transparent border-2 border-gray-400 text-white font-medium text-lg py-3 px-6 rounded placeholder-gray-400"
              type="password"
              placeholder="Password"
            />
            <button type="submit" className="mt-4 text-white border-none outline-none hover:bg-orange-700 font-semibold bg-orange-500 text-lg py-3 px-8 w-full rounded">
              LOGIN
            </button>
            {onBack && (
              <button type="button" onClick={onBack} className="mt-2 text-orange-400 hover:underline bg-transparent border-none">Back</button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login