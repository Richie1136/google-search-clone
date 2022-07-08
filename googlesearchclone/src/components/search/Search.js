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
  return (
    <div>
      Search
      <Links />
    </div>
  )
}

export default Search