import React from 'react'
import { fetchPhotos, fetchVideos } from "./api/mediaApi"
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'


const App = () => {

  return (
    <div className='min-h-screen text-white w-full bg-black'>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

    </div>
  )
}

export default App