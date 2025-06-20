import React, { useState } from 'react'
const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function formSubmit(event) {
    event.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }

  function handleEmail(event) {
    setEmail(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className ='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={formSubmit} className='flex flex-col items-center justify-center'>
                <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey' type="email" placeholder='Enter Email' onChange={handleEmail} value={email} />
                <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-4 placeholder:text-grey' type="password" placeholder='Enter Password' onChange={handlePassword} value={password}/>
                <button className='mt-4 text-white outline-none  border-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login 