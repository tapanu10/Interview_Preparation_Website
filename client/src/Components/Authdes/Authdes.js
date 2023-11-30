import React, { useState } from 'react';
import icon from '../../images/logo-white.png';
import './Authdes.css';
import AboutAuth from './AboutAuth';
import { useNavigate } from 'react-router-dom';
import {signup,login} from '../../actions/auth'
import { useDispatch } from 'react-redux';

const Authdes = () => {
 
  const [isSignup, setIsSignup] = useState(false);
  const [name,setName]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const dispatch=useDispatch()
  const navigate = useNavigate();



  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!email && !password) {
      alert('Enter email and password');
      return;
    }
  
    if (isSignup && !name) {
      alert('Enter a name to continue');
      return;
    }
  
    if (isSignup) {
      dispatch(signup({ name, email, password })).then(() => {
        // Navigate after successful signup
        navigate('/');
      });
    } else {
      dispatch(login({ email, password })).then(() => {
        // Navigate after successful login
        navigate('/');
      });
    }
  };
  
  
  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
      <div className='auth-container-2'>
        {!isSignup && <img src={icon} alt='skillup' width='250' className='login-logo' />}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor='name'>
              <h4> Display Name</h4>
              <input type='text' id='name' name='name' onChange={(e)=>{setName(e.target.value)}}/>
            </label>
          )}
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type='email' name='email' id='email' onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label htmlFor='password'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4>Password</h4>
              {!isSignup && <p style={{ color: '#007ac6', fontSize: '13px' }}>Forget Password?</p>}
            </div>
            <input type='password' name='password' id='password' onChange={(e) => setPassword(e.target.value)} />
            {isSignup && (
              <p>
                Passwords must contain at least eight characters,<br></br>including at least 1 letter and number.
              </p>
            )}
          </label>

          <button  type='submit' className='auth-btn'>
            {isSignup ? 'Sign up' : 'Log in'}
          </button>
        </form>
        <p>
          {isSignup ? 'already have an account?' : "Don't have an account?"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>
            {isSignup ? 'Log in' : 'sign up'}
          </button>
          {isSignup && (
            <p style={{ color: '#666767', fontSize: '13px' }}>
              By clicking "Sign up" you agree to our <span style={{ color: '#007ac6' }}> terms of service</span>,{' '}
              <span style={{ color: '#007ac6' }}>privacy policy</span> and <span style={{ color: '#007ac6' }}>cookie policy</span>.
            </p>
          )}
        </p>
      </div>
    </section>
  );
};

export default Authdes;
