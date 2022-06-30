import { createContext, useContext, useState } from 'react'

const ResultContext = createContext()


const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'


export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')


  // /videos, /search, /images
  const getResults = async (type) => {
    setIsLoading(true)
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        headers: {
          'X-RapidAPI-Key': 'e9f136fd86msh20374d953bfb05ep137d7ejsnaede58975cae',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
      }
    })
    const data = await response.json()
    setResults(data)
    setIsLoading(false)
  }


  return (
    <ResultContext.Provider value={{ getResults, searchTerm, results, isLoading, setSearchTerm }}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)