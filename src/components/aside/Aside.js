import React from 'react'
import { MdSpaceDashboard,MdAdminPanelSettings,MdAnalytics, MdOutlineAccessTimeFilled, MdOutlineClose, MdMenu,MdWbSunny,IoMoonSharp } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsMoonFill } from "react-icons/bs";
function Aside() {
  return (
    <aside>
        <div className='top'>
            <div className="logo">
            <IoTimer className='logo__icon'/>
            <h2>Clock-Me</h2>
            </div>
            <div className='close'>
                <MdOutlineClose />
            </div>
        </div>
        <nav className='side-bar'>
            <a href="/">
                <MdSpaceDashboard />
                <h3>Dashboard</h3>
            </a>
            
            <a href="/" className='active'>
                <MdAdminPanelSettings />
                <h3>Admin</h3>
            </a>
        
            <a href="/">
                <MdAnalytics />
                <h3>Analytics</h3>
            </a>
    
   
            <a href="/">
            <MdOutlineAccessTimeFilled />
                <h3>Timecard</h3>
            </a>
            {/* <a href="/">
            <RiLogoutCircleLine />
                <h3>Logout</h3>
            </a> */}
            <footer>
             
                <div className='profile'>
                <div className='profile-photo'>
                        <img src="../images/ebe.png"/>
                    </div>
                <div className='info'>
                    <p>Hey, <b>Ebenezar</b></p>
                    <small className='text-muted'>Admin</small>
                </div>
                  
                </div>

            </footer>




        </nav>

    </aside>
  )
}

export default Aside