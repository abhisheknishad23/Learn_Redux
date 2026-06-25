import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const { query } = useSelector((store)=> store.search)

  return (
    <div>
      <div className='text-center p-5 bg-blue-300 text-2xl font-semibold'>Media search</div>
        <SearchBar />
        {query !=''? <div><Tabs />
        <ResultGrid /></div>: ''}
    </div>
  )
}

export default HomePage