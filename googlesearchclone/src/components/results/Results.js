import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../../context/ResultContextProvider'
import Loading from '../loading/Loading'


const Results = () => {

  const { results, isLoading, getResults, searchTerm } = useResultContext()

  const location = useLocation() // image, news, video

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/video') {
        getResults(`/search/q=${searchTerm} video`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname])

  if (isLoading) {
    return <Loading />
  }



  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.map(({ link, title }, index) => (
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
    case '/image':
      return (

        <div className='flex flex-wrap justify-center items-center'>
          {results?.map(({ image, link: { href, title } }, index) => (
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
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
          {results?.map(({ links, id, source, title }) => (
            // results has links object, source object with the href and a title, and the 
            // title 
            <div key={id} className='md:w-2/5 w-full'>
              <a className='hover:underline' href={links?.[0].href} target="_blank" rel='noreferrer'>
                <p className='text-lg dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
              <div className='flex gap-4'>
                <a href={source?.href} target="_blank" rel='noreferrer'>
                  {source?.href}
                </a>
              </div>
            </div>
          ))
          }
        </div >
      )
    case '/video':
      return (
        <div className='flex flex-wrap'>
          {results?.map((video, index) => (
            <div className='p-2' key={index}>
              {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls width='355px' height='200px' />}
            </div>
          ))}
        </div>
      )
    default:
      return 'ERROR!'
  }


}

export default Results