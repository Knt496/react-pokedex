import { useState, useEffect, useRef } from "react";

export function useSearch () {
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState('')
  const isFirstInput = useRef(true)

  useEffect(() => {

    if(isFirstInput.current) {
      isFirstInput.current = searchValue === ""
      return
    }
  
    if(searchValue == '') {
      setError("Can't search for empty value")
      return
    }

    if(searchValue.length < 3) {
      setError("At least 3 characters required")
      return
    }

    setError('')

  },[searchValue])

  return { searchValue, setSearchValue, error }

};