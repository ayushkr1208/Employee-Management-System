import React from 'react'
import { FiLogOut } from 'react-icons/fi'

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  const username = props.data && props.data.firstName ? props.data.firstName : 'Admin';

  return (
    <div className='flex items-center justify-end gap-4'>
      {/* Optionally show username here if desired */}
      <button
        onClick={logOutUser}
        className='flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2 rounded-full shadow-lg font-semibold text-base hover:scale-105 hover:shadow-xl transition group relative'
        title='Log Out'
      >
        <FiLogOut className='text-lg' />
        <span className='hidden sm:inline'>Log Out</span>
        <span className='absolute left-1/2 -bottom-8 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition'>Log Out</span>
      </button>
    </div>
  )
}

export default Header