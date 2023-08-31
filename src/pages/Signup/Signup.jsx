import React from 'react'
import './Signup.scss'
import registerImg from '../../img//register-img.png'
function Signup() {
  return (
    <div className='Signup'>
        <div className="inner">
        <div className="left__inner">
          <img className='inner__img' src={registerImg } alt="" />
        </div>
        <div className="right__inner">
          <h4 className='inner__tittle'>Welcome to lorem..!</h4>
          <div className='our__btns'>
            <button className='login__btn'>Login</button>
            <button className='regis__btn'>Register</button>
          </div>
          <p className='inner__info'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.</p>
          <h5 className='user__name'>Email Address</h5>
          <input className='inp__user-name' type="text" placeholder='Enter Email Address' />
          <h5 className='password'>User name</h5>
          <input className='inp__password' type="text" placeholder='Enter your User name'/>
          <h5 className='password'>Password</h5>
          <input className='inp__password' type="text" placeholder='Enter your Password'/>
          <i class="bi bi-eye-slash-fill"></i>
          <button className='register'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Signup