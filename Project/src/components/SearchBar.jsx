import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

        const [text, setText] = useState('')

        const dispatch = useDispatch()

        const submitHandler=(e)=>{
            e.preventDefault()
            
            dispatch(setQuery(text))

            setText('')
        }
    
  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
            }} className='flex bg-gray-800 px-14 gap-5 p-10'>
            <input value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }} 
            required className='border-2 px-4 py-2 text-xl rounded outline-none' type='text' placeholder='search' />
            <button className='active:scale-50 px-4 py-2 text-xl rounded cursor-pointer border-2'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar