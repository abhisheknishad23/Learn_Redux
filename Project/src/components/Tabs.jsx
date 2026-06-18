import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos']

    const dispatch = useDispatch()

    const activeTab = useSelector ((state)=> state.search.activeTab)

  return (
    <div className='flex gap-5 p-10'>
        {tabs.map(function(elem, idx){
            return ( <button className={`${(activeTab==elem?'bg-amber-700':'bg-gray-500')} rounded-xl cursor-pointer active:scale-50 px-2 py-2`}
            key={idx}
            onClick={()=>{
                dispatch(setActiveTab(elem))
            }}>
                {elem}
            </button>
            )
        })}
    </div>
  )
}

export default Tabs