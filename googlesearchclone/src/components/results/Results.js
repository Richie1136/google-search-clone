import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../../context/ResultContextProvider'
import Loading from '../loading/Loading'


const Results = () => {

  const { results, isLoading, getResults, searchTerm } = useResultContext()

  // console.log(results)

  const location = useLocation() // images, news, videos

  useEffect(() => {
    getResults('/search/q=elon+musk')
  }, [])

  if (isLoading) {
    return <Loading />
  }



  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.results?.map(({ link, title }, index) => (
            // response is results array 8 and then results again with the objects
            <div key={index} className='md:w-2/5 w-full'>
              <a href={link} target="_blank" rel='noreferrer'>
                <p className='text-sm'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
    case '/images':
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {results?.image_results?.map(({ image, link: { href, title } }, index) => (
            // Getting this from the Context provider
            // loading lazy so that all images aren't loading at the same time
            // break-words adds line breaks mid word if needed.
            <a key={index} className='sm:p-3 p-5' href={href} target="_blank" rel='noreferrer'>
              <img src={image?.src} alt={title} loading='lazy' />
              <p className='w-36 break-words text-sm mt-2'>
                {title}

              </p>
            </a>
          ))}
        </div>
      )
    case '/news':
      return 'SEARCH'
    case '/videos':
      return 'SEARCH'
    default:
      return 'ERROR!'
  }


}

export default Results