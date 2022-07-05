import { createContext, useContext, useState } from 'react'

const ResultContext = createContext()


const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'


export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('Apple')


  // /videos, /search, /images
  const getResults = async (url) => {
    setIsLoading(true)
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e9f136fd86msh20374d953bfb05ep137d7ejsnaede58975cae',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      }
    })
    const data = await response.json()
    console.log(data)
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


// import React, { createContext, useContext, useState } from 'react';

// const StateContext = createContext();
// const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

// export const StateContextProvider = ({ children }) => {
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   const getResults = async (url) => {
//     setLoading(true);

//     const res = await fetch(`${baseUrl}${url}`, {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'e9f136fd86msh20374d953bfb05ep137d7ejsnaede58975cae',
//         'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
//       },
//     });

//     const data = await res.json();

//     setResults(data);
//     setLoading(false);
//   };

//   return (
//     <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateContext = () => useContext(StateContext);