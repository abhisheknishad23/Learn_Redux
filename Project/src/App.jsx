import React from 'react'
import { fetchPhotos, fetchVideos } from "./api/mediaApi"
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {

  return (
    <div className='h-screen text-white w-full bg-black'>
     <SearchBar />
     <Tabs />
     <ResultGrid />
    </div>
  )
}

export default App