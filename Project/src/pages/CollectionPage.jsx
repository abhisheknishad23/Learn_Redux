import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'

export const CollectionPage = () => {

  const collection = useSelector(state=> state.collection.items)

  const dispatch = useDispatch()

  const clearAll = ()=>{
    dispatch(clearCollection())
  }


  return (
    <div className='overflow-auto px-10 py-6'>
      {collection.length>0?
      <div className='flex justify-between mb-6'>
        <h2 className='text-xl font-medium'>Your Collection</h2>
        <button
        onClick={()=>{clearAll()}}
         className='active:scale-50 transition cursor-pointer bg-red-600 px-8 py-2 text-base rounded'>Clear All</button>
      </div>:<h2 className='text-xl font-medium'>Collection is Empty</h2>}

    <div className='flex justify-start w-full flex-wrap gap-5 overflow-auto px-10'>
      {collection.map((item,idx)=>{
        return <div key={idx}>
          <CollectionCard item={item} />
          </div>
      })}
    </div>
    </div>
  )
}

export default CollectionPage
