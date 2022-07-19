import React from 'react'
import { MdSpaceDashboard,MdAdminPanelSettings,MdAnalytics, MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
function Aside() {
  return (
    <aside>
        <div className="logo">
        <IoTimer className='logo__icon'/>
        <h2>Clock-Me</h2>
        </div>
        <nav className='side-bar'>
        <ul>
            <li>
                <a href="/">
                    <MdSpaceDashboard />
                    <h3>Dashboard</h3>
                </a>
            </li>
            <li>
            <a href="/" className='active'>
                <MdAdminPanelSettings />
                <h3>Admin</h3>
            </a>
        </li>
        <li>
        <a href="/">
            <MdAnalytics />
            <h3>Analytics</h3>
        </a>
    </li>
    <li>
    <a href="/">
    <MdOutlineAccessTimeFilled />
        <h3>Timecard</h3>
    </a>
</li>
        </ul>
        </nav>

    </aside>
  )
}

export default Aside