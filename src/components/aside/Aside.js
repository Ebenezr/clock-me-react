import React from 'react'


function Aside() {
  return (
    <aside>
        <div className="logo"></div>
        <nav className='side-bar'>
        <ul>
            <li>
                <a href="/">
                    <h2>Dashboard</h2>
                </a>
            </li>
            <li>
            <a href="/">
                <h3>Admin</h3>
            </a>
        </li>
        <li>
        <a href="/">
            <h3>Analytics</h3>
        </a>
    </li>
    <li>
    <a href="/">
        <h3>Timecard</h3>
    </a>
</li>
        </ul>
        </nav>

    </aside>
  )
}

export default Aside