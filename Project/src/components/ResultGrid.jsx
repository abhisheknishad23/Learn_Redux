import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const {query, activeTab, results, loading, error} = useSelector((store)=>store.search)

    useEffect (function(){
        if (!query) return
        const getData = async()=>{

        try{
            dispatch(setLoading())
            let data =[]

        if(activeTab == 'photos'){
            let response = await fetchPhotos(query)
            data = response.results.map((item)=>({
                id:item.id,
                type:'photo',
                title:item.alt_description,
                thumbnail:item.urls.small,
                src:item.urls.full
            }))
        }
        if(activeTab == 'videos'){
            let response = await fetchVideos(query)
            data = response.videos.map((item)=>({
                id:item.id,
                type:'video',
                title:item.user.name || 'video',
                thumbnail:item.image,
                src:item.video_files[0].link
            }))
        }
        dispatch(setResults(data));

        } catch (err){
            dispatch(setError(err.message));

        }
    }
    getData()
    }, [query,activeTab, dispatch])

    if (error) return <h1 className="text-white p-5">Error: {error}</h1>
    if (loading) return <h1 className="text-white p-5">Loading...</h1>
    if (!results || results.length === 0) return <h1 className="text-white p-5">No results found for "{query}"</h1>
    

  return (
    <div className='flex justify-between w-full flex-wrap gap-5 overflow-auto px-10'>
        {results.map((item,idx)=>{
            return <div key={idx}>
                <ResultCard item={item}/>
            </div>
        })}
    </div>
  )
}

export default ResultGrid