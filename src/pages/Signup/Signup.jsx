import React, { useContext, useRef,} from 'react'
import './Signup.scss'
import registerImg from '../../img//register-img.png'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom'
function Signup() {
  const {orders, setOrders} = useContext(Context)
  const inps = useRef()
// console.log(inps.current.value);
console.log(orders);
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
          <input ref={inps} className='signup-inp__password' type="text" placeholder='Enter your User name'/>
          <h5 className='signup-password'>Password</h5>
          <input className='signup-inp__password' type="text" placeholder='Enter your Password'/>
          <i class="bi bi-eye-slash-fill bis"></i>
          <Link to='/blog'> <button onClick={()=> setOrders(inps.current.value)} className='signup-register'>Register</button></Link>
          
        </div>
      </div>
    </div>
  )
}

export default Signup