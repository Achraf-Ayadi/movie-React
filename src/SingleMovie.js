import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch'

const SingleMovie = () => {
  const { id } = useParams()
  const { loading, error, data: movie } = useFetch(`&i=${id}`)

  if (loading) {
    return <div className='loading'></div>
  }
  if (error.show) {
    return (
      <div className='error-page'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  } else {
    const { Title, Year, Plot: info, Poster } = movie
    return (
      <section className='single-movie'>
        <img src={Poster} alt={Title} />
        <div className='single-movie-info'>
          <h2>{Title}</h2>
          <p>{info}</p>
          <h4>{Year}</h4>
          <Link to='/' className='btn'>
            Back to movies
          </Link>
        </div>
      </section>
    )
  }
}

export default SingleMovie
