import React from 'react'
import './Login.scss'
import leftInner from '../../img/left__inner.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='Login'>
      <div className="login-inner">
        <div className="login-left__inner">
          <img className='login-inner__img' src={leftInner } alt="" />
        </div>
        <div className="login-right__inner">
          <h4 className='login-inner__tittle'>Welcome to lorem..!</h4>
          <div className='login-our__btns'>
            <button className='login-login__btn'>Login</button>
            <button className='login-regis__btn'>Register</button>
          </div>
          <p className='login-inner__info'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.</p>
          <h5 className='login-user__name'>User name</h5>
          <input className='login-inp__user-name' type="text" placeholder='Enter your User name'/>
          <h5 className='login-password'>Password</h5>
          <input className='login-inp__password' type="text" placeholder='Enter your password'/>
          <ul className='login-second__list'>
            <li className='login-second__list-item'>
              <button className='login-right__btn' type='chexbox'></button>
            </li>
            <li className='login-second__list-item'>
            Rememebr me
            </li>
            <li className='login-second__list-item'>
            <Link>Forgot Password ?</Link>
            </li>
          </ul>
          <button className='login-last__btn'>Login</button>
        </div>
      </div>
        {/* <h1>Login</h1> */}
        {/* <Link></Link> */}
    </div>
  )
}

export default Login