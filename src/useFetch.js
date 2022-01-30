import React, { useState, useEffect } from 'react'
const API_ENDPOINT = "https://www.omdbapi.com/?apikey=63023af6"

const useFetch = (urlParms) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)
  const fetchMovie = async (url) => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.Response === 'True') {
        setError({ show: false, msg: '' })
        setData(data.Search || data)
      } else {
        setError({ show: true, msg: data.Error })
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}${urlParms}`)
  }, [urlParms])
  return { data, loading, error }
}

export default useFetch
