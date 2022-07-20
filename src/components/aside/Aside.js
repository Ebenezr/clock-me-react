import React from 'react'
import { MdSpaceDashboard,MdAdminPanelSettings,MdAnalytics, MdOutlineAccessTimeFilled, MdOutlineClose, MdMenu,MdWbSunny,IoMoonSharp } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsMoonFill } from "react-icons/bs";

const  Aside=()=> {
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
      
        <fieldset className='side-bar' title='manage'>
            <legend>MANAGE</legend>
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

        </fieldset>
        <fieldset class="preference" title="preference">
            <legend>PREFRENCES</legend>
            <div className='content-wrapper'>
                <h3>Theme</h3>
                <div className='theme-toggler'>
                    <span className="active"><MdWbSunny /></span>
                    <span><BsMoonFill /></span>
                </div>
                </div>
            </fieldset>

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
    </aside>
  )
}

export default Aside