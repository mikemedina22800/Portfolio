import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { IconButton } from "@mui/material"
import { Menu } from "@mui/icons-material"
import m from '../../../images/m-solid.svg'

const Navbar = () => {
  const path = useLocation().pathname;
  const [dropDown, setDropDown] = useState(false)
  
  return (
    <nav className="fixed font-bold top-0 w-screen px-5 sm:px-10 h-20 flex items-center justify-between z-50 bg-black border-b-2 border-[lime]">
      <h1 className='text-[lime] h-10 w-10 flex items-center justify-center border-[rgb(0,255,0)] border-2 p-2 rounded-full'>
        <img className='fill-[lime]' src={m}/>
      </h1>
      <div className='hidden sm:flex text-lg text-white w-96 justify-between items-center'>
        <Link to=''>
          <h1 className={`${path == '/' && ('text-[lime]')} hover:text-[lime]`}>Home</h1>
        </Link>
        <Link to='works'>
          <h1 className={`${path == '/works' && ('text-[lime]')} hover:text-[lime]`}>Works</h1>
        </Link>
        <Link to='contact'>
          <h1 className={`${path == '/contact' && ('text-[lime]')} hover:text-[lime]`}>Contact</h1>
        </Link>
      </div>
      <div className="text-white sm:hidden">
        <IconButton color="inherit" onClick={() => {(dropDown === false) ? setDropDown(true) : setDropDown(false)}}>
          <Menu className="!text-5xl"/>
        </IconButton>
      </div>
      {dropDown &&
        <div onClick={() => {setDropDown(false)}}  className={`text-xl text-white font-bold fixed right-0 top-20 bg-black sm:hidden z-10 w-48 border-x-2 border-b-2 border-[lime]`}>
          <Link to="/">
            <h1 className={`py-4 pl-4 ${path == '/' && 'text-[lime]'} hover:!text-[lime]`}>Home</h1>
          </Link>
          <Link to="works">
            <h1 className={`py-4 pl-4 ${path == '/works' && 'text-[lime]'} hover:!text-[lime]`}>Works</h1>
          </Link>
          <Link to="works">
            <h1 className={`py-4 pl-4 ${path == '/contact' && 'text-[lime]'} hover:!text-[lime]`}>Contact</h1>
          </Link>
        </div>
      }
    </nav>
  )
}

export default Navbar