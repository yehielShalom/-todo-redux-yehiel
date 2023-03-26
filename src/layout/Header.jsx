import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<nav className='flex justify-between px-[30px] py-[30px] bg-red-600 text-white'>
<Link to={'/'}>Home</Link>
</nav>
  )
}

export default Header