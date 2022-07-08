import Links from "../links/Links"
import { useState, useEffect } from "react"

import { useDebounce } from "use-debounce"
import { useResultContext } from "../../context/ResultContextProvider"

// useDebounce hook allows you to debounce any fast changing value. 
// The debounced value will only reflect the latest value when the useDebounce hook 
// has not been called for the specified time period. When used in conjunction with useEffect, 
// you can easily ensure that expensive operations like API calls are not executed too frequently.

// superman => 300, superman

const Search = () => {
  const [text, setText] = useState('')

  const { setSearchTerm } = useResultContext()

  const [debouncedValue] = useDebounce(text, 300)

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue)
    }
  }, [debouncedValue])

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const clearInput = () => {
    setText('')
  }


  return (
    <div className="relative sm: ml-48 md: ml-72 sm:-mt-10 mt-3">
      <input className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Googly 🔎" onChange={handleChange} type='text' value={text} />
      {!text && (
        <button className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={clearInput}>
          X
        </button>
      )}
      <Links />
    </div>
  )
}

export default Search