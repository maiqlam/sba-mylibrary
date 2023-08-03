import React from 'react'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetSearchResults } from '../features/bookSlice'

// Header and navigation component (includes header, search form, and link to My Bookshelf)
export const HeaderNav = () => {
    const dispatch = useDispatch();

// Returning to Main will empty search results
    const handleMyLibraryClick = () => {
        dispatch(resetSearchResults());
    }

  return (
    <div>
        <Link to="/" onClick={handleMyLibraryClick}>
          <header><h1>MyLibrary</h1></header>
        </Link>

        <div className='nav'>
          <SearchForm />
          <Link to="/bookshelf">
            <h2>My Bookshelf</h2>
          </Link>
        </div>
    </div>
  )
}
