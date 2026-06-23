import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='w-[18vw] relative h-80 bg-white rounded overflow-hidden'>
      <a target='_blank' className='h-full href={item.url}'>
      {item.type == 'photo'?<img className='h-fulll w-full object-cover object-center' src={item.src} alt='' />: ''}
      {item.type =='video'?<video className='h-fulll w-full object-cover object-center' autoPlay loop muted src='item.src'></video> :''}
      </a>
      <h1 className='text-black'>{item.title}</h1>
      <div id='bottom' className='flex justify-between gap-3 items-center w-full px-6 py-10 absolute bottom-0 text-white'>
        <h2 className='text-xl font-semibold capitalize'>{item.title}</h2>
        <button className='bg-indigo-500 text-white rounded px-3 py-1 font-medium cursor-pointer'>Save</button>
      </div>
    </div>
  )
}

export default ResultCard