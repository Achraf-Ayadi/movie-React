import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { searchTerm, setSearchTerm, error } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <h2>Search movies</h2>
      <input
        type='text'
        placeholder='batman'
        className='form-input'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='error'>{error.show && error.msg}</div>
    </form>
  )
}
export default SearchForm
