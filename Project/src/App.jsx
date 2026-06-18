import React from 'react'
import { fetchPhotos, fetchVideos } from "./api/mediaApi"
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

const App = () => {

  return (
    <div className='h-screen text-white w-full bg-black'>
     <SearchBar />
     <Tabs />
    </div>
  )
}

export default App