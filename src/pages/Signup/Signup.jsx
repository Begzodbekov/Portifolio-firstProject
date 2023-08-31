import React from 'react'
import './Signup.scss'
import registerImg from '../../img//register-img.png'
function Signup() {
  return (
    <div className='Signup'>
        <div className="signup-inner">
        <div className="signup-left__inner">
          <img className='signup-inner__img' src={registerImg } alt="" />
        </div>
        <div className="signup-right__inner">
          <h4 className='signup-inner__tittle'>Welcome to lorem..!</h4>
          <div className='signup-our__btns'>
            <button className='signup-login__btn'>Login</button>
            <button className='signup-regis__btn'>Register</button>
          </div>
          <p className='signup-inner__info'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.</p>
          <h5 className='signup-user__name'>Email Address</h5>
          <input className='signup-inp__user-name' type="text" placeholder='Enter Email Address' />
          <h5 className='signup-password'>User name</h5>
          <input className='signup-inp__password' type="text" placeholder='Enter your User name'/>
          <h5 className='signup-password'>Password</h5>
          <input className='signup-inp__password' type="text" placeholder='Enter your Password'/>
          <i class="bi bi-eye-slash-fill bis"></i>
          <button className='signup-register'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Signup