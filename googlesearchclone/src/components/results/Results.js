import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../../context/ResultContextProvider'
import Loading from '../loading/Loading'


const Results = () => {

  const { results, isLoading, getResults, searchTerm } = useResultContext()

  const location = useLocation() // images, news, videos

  if (isLoading) {
    return <Loading />
  }

  console.log(location.pathname)

  switch (location.pathname) {
    case '/search':
      return 'SEARCH'

    default:
      return 'ERROR!'
  }


}

export default Results