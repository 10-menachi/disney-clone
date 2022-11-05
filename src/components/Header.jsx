import React from 'react'

function Header() {
  return (
    <nav className='flex justify-between items-center py-0 px-9 tracking-widest fixed top-0 left-0 right-0 h-20 bg-[#090B13] z-10'>
        <a href="" className='font-0 p-0 w-20 mt-1 max-h-20 inline-block'><img src="/images/logo.svg" alt="disney-logo" className='block w-full' /></a>
        <a href="" className=''>Login</a>
    </nav>
  )
}

export default Header