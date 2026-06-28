import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item)=>{
        dispatch(removeCollection(item.id))

        dispatch(removeToast())
    }


  return (
    <div className='w-[18vw] relative h-80 bg-white rounded overflow-hidden'>
      <a target='_blank' className='h-full' href={item.url}>
      {item.type == 'photo'?<img className='h-fulll w-full object-cover object-center' src={item.src} alt='' />: ''}
      {item.type =='video'?<video className='h-fulll w-full object-cover object-center' autoPlay loop muted src='item.src'></video> :''}
      </a>
      <h1 className='text-black'>{item.title}</h1>
      <div id='bottom' className='flex justify-between gap-3 items-center w-full px-6 py-6 absolute bottom-0 text-white'>
        <h2 className='text-xl font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
        <button
        onClick={()=>{
            removeFromCollection(item)
        }}
         className='bg-indigo-500 text-white rounded px-3 py-1 font-medium cursor-pointer'>Remove</button>
      </div>
    </div>
  )
}

export default CollectionCard