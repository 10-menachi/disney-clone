import React from 'react'

function Header() {
  return (
    <nav className='flex justify-between items-center py-0 px-9 tracking-widest fixed top-0 left-0 right-0 h-20 bg-[#090B13] z-10'>
        <a href="" className='font-0 p-0 w-20 mt-1 max-h-20 inline-block'><img src="/images/logo.svg" alt="disney-logo" className='block w-full' /></a>
        <div className='nav ml-6 hidden md:flex items-center flex-row flex-nowrap h-full justify-end m-0 p-0 relative mr-auto'>
            <a className='icon-text' href="/home"><img className='icon-image' src="/images/home-icon.svg" alt="HOME" /><span>Home</span></a>
            <a className='icon-text' href="/movie"><img className='icon-image' src="/images/movie-icon.svg" alt="MOVIE" /><span>Movie</span></a>
            <a className='icon-text' href="/original"><img className='icon-image' src="/images/original-icon.svg" alt="ORIGINAl" /><span>Original</span></a>
            <a className='icon-text' href="/search"><img className='icon-image' src="/images/search-icon.svg" alt="SEARCH" /><span>Search</span></a>
            <a className='icon-text' href="/series"><img className='icon-image' src="/images/series-icon.svg" alt="SERIES" /><span>Series</span></a>
            <a className='icon-text' href="/watchlist"><img className='icon-image' src="/images/watchlist-icon.svg" alt="WATCHLIST" /><span>Watchlist</span></a>
        </div>
        <a href="" className='login'>Login</a>
    </nav>
  )
}

export default Header