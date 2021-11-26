import React from 'react'
import MovieList from '../components/MovieList'
import SearchForm from './SearchForm'
const Home=()=> {
    return (
        <div>
          <SearchForm />
          <MovieList />
        </div>
    )
}

export default Home
