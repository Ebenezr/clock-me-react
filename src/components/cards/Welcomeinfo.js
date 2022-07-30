import React from 'react'
const Welcomeinfo=({accName})=> {
  return (
    <div className="welcome-info">
    <h2>Hello {accName}</h2>
    <span>Welcome back!</span>
  </div>
  )
}

export default Welcomeinfo