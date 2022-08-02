import { createContext, useContext, useState } from 'react'

const ResultContext = createContext()


const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';


export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('Elon Musk')


  // /video, /search, /images
  const getResults = async (type) => {
    setIsLoading(true)
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'e9f136fd86msh20374d953bfb05ep137d7ejsnaede58975cae',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
      }
    });

    const data = await response.json()

    if (type.includes('/news')) {
      setResults(data.entries)
    } else if (type.includes('/image')) {
      setResults(data.image_results)
    } else {
      setResults(data.results)
    }
    setIsLoading(false)
  }


  return (
    <ResultContext.Provider value={{ getResults, searchTerm, results, isLoading, setSearchTerm }}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)