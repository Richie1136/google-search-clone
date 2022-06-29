import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contextx/ResultContextProvider'
import Loading from '../loading/Loading'


const Results = () => {

  const { results, isLoading, getResults, searchTerm } = useResultContext()

  const location = useLocation() // images, news, videos

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>Results</div>
  )
}

export default Results