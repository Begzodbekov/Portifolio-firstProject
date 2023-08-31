import React from 'react'
import './Login.scss'
import leftInner from '../../img//left__inner.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='Login'>
      <div className="inner">
        <div className="left__inner">
          <img className='inner__img' src={leftInner } alt="" />
        </div>
        <div className="right__inner">
          <h4 className='inner__tittle'>Welcome to lorem..!</h4>
          <div className='our__btns'>
            <button className='login__btn'>Login</button>
            <button className='regis__btn'>Register</button>
          </div>
          <p className='inner__info'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.</p>
          <h5 className='user__name'>User name</h5>
          <input className='inp__user-name' type="text" placeholder='Enter your User name'/>
          <h5 className='password'>Password</h5>
          <input className='inp__password' type="text" placeholder='Enter your password'/>
          <ul className='second__list'>
            <li className='second__list-item'>
              <button className='right__btn' type='chexbox'></button>
            </li>
            <li className='second__list-item'>
            Rememebr me
            </li>
            <li className='second__list-item'>
            <Link>Forgot Password ?</Link>
            </li>
          </ul>
          <button className='last__btn'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login