import React from 'react'
import { MdMenu,MdWbSunny,IoMoonSharp } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";

const Header=()=> {
  return (
    <header>
        <button id='menu-btn'>
            <MdMenu />
        </button>
        <div className='theme-toggler'>
            <span className="active"><MdWbSunny /></span>
            <span><BsMoonFill /></span>
        </div>
        <div className='profile'>
            <div className='info'>
                <p>Hey, <b>Ebenezar</b></p>
                <small className='text-muted'>Admin</small>

            </div>
            <div className='profile-photo'>
                <img scr="#" />
            </div>
        </div>
    
    </header>
  )
}

export default Header