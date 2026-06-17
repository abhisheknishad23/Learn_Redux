import React from 'react'
import { fetchPhotos, fetchVideos } from "./api/mediaApi"

const App = () => {

  return (
    <div className='h-screen text-white w-full bg-black'>
      <button className='bg-amber-700 py-2 px-2 m-5 rounded ' onClick={async()=>{
        const data = await fetchPhotos('dog')
        console.log(data.results);
        }}>Get Api</button>

      <button className='bg-amber-500 py-2 px-2 rounded m-5' onClick={async()=>{
        const data = await fetchVideos('cat')
        console.log(data.videos);
      }}>
        Get Video
      </button>
    </div>
  )
}

export default App