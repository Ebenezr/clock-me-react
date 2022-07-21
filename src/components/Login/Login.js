import React from 'react'
import { MdCheckBox } from 'react-icons/md'

function Login() {
  return (
    <section id='login'>
    <div className='container__login'>
    <h2>Clock-Me<span>System</span></h2> 
      <form>
        <h4>Sign in to start your session</h4>
          <label>Email
            <input className='inputs' type="text" placeholder='admin@gmail.com'/>
          </label>
          <label>Password
            <input className='inputs' type="password" placeholder='******'/>
          </label>
          <input type="text" className='error' disabled />
          <div className='nav'>
          <span>
            <input type="checkbox"/>
            <h3><strong>Remeber Me</strong></h3>
          </span>
          <button className='btn-pry' type="submit">Sign In</button>
          </div>
          <span className='misc'>
            <a href="#">I forgot my password</a>
          </span>
    </form>
    </div>
    </section>
  )
}

export default Login