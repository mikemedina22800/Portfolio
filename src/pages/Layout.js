import { useState } from 'react';
import { Outlet } from "react-router-dom"
import { Link, useLocation } from 'react-router-dom'
import { IconButton } from "@mui/material"
import { Menu } from "@mui/icons-material"
import m from '../images/m-solid.svg'

const Layout = () => {
  const path = useLocation().pathname;
  const [dropDown, setDropDown] = useState(false)
  
  return (
    <>
      <nav className="fixed top-0 w-screen px-5 sm:px-10 h-20 flex items-center justify-between z-50 text-lg text-white bg-black border-b-2 border-[aqua] font-extrabold"  style={{fontFamily:'Poppins'}}>
        <h1 className='h-10 w-10 flex items-center justify-center border-[aqua] border-2 p-2 rounded-full'>
          <img src={m}/>
        </h1>
        <div className='hidden sm:flex text-white w-64 justify-between items-center'>
          <Link to=''>
            <h1 className={`${path == '/' && ('text-[aqua]')} hover:text-[aqua]`}>Home</h1>
          </Link>
          <Link to='works'>
            <h1 className={`${path == '/works' && ('text-[aqua]')} hover:text-[aqua]`}>Works</h1>
          </Link>
        </div>
        <div className="text-white sm:hidden">
          <IconButton color="inherit" onClick={() => {(dropDown === false) ? setDropDown(true) : setDropDown(false)}}>
            <Menu className="!text-5xl"/>
          </IconButton>
        </div>
        {dropDown &&
          <div onClick={() => {setDropDown(false)}}  className={`fixed right-0 top-20 bg-black sm:hidden z-10 w-48 border-x-2 border-b-2 border-[aqua]`}>
            <Link to="/">
              <h1 className={`py-4 pl-4 ${path == '/' && 'text-[aqua]'} hover:!text-[aqua]`}>Home</h1>
            </Link>
            <Link to="works">
              <h1 className={`py-4 pl-4 ${path == '/works' && 'text-[aqua]'} hover:!text-[aqua]`}>Works</h1>
            </Link>
          </div>
        }
      </nav>
      <Outlet/>
    </>  
  )
}

export default Layout