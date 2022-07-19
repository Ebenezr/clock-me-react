import React from 'react'
import { MdSpaceDashboard,MdAdminPanelSettings,MdAnalytics, MdOutlineAccessTimeFilled } from "react-icons/md";

function Aside() {
  return (
    <aside>
        <div className="logo"></div>
        <nav className='side-bar'>
        <ul>
            <li>
                <a href="/">
                    <MdSpaceDashboard />
                    <h2>Dashboard</h2>
                </a>
            </li>
            <li>
            <a href="/">
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