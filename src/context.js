import React, { useState, useContext, useEffect } from 'react'
import useFetch from './useFetch'
// make sure to use https

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('batman')
  const { loading, error, data: movies } = useFetch(`&s=${searchTerm}`)

  return (
    <AppContext.Provider
      value={{
        loading,

        searchTerm,
        setSearchTerm,
        movies,

        error,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
