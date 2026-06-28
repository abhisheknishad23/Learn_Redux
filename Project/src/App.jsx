import React from 'react'
import { fetchPhotos, fetchVideos } from "./api/mediaApi"
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  return (
    <div className='min-h-screen text-white w-full bg-black'>

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer />

    </div>
  )
}

export default App