import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className='flex justify-between items-center py-6 px-10 '>
        <h2 className='font-medium text-2xl'>Media Search</h2>
        <div className='flex gap-2 items-center'>
          <Link className='text-lg rounded px-4 py-2 bg-amber-200 text-black active:scale-50' to='/'>Search</Link>
          <Link className='text-lg rounded px-4 py-2 bg-amber-200 text-black active:scale-50' to='/collection'>Collection</Link>
        </div>
      </div>
  )
}

export default Navbar