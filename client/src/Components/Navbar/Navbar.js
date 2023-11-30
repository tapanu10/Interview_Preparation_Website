import React,{useEffect} from 'react'
import logo from '../../images/logo-color.png'
import {Link,useNavigate  } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


//import {useSelector,useDispatch} from 'react-redux'
import './Navbar.css'
import Avatar from '../../Components/Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
  const dispatch=useDispatch()
 const navigate=useNavigate()
var User=useSelector((state)=>(state.currentUser))
  //  console.log(User);
  const handleLogout=()=>
  {
    dispatch({type:'LOGOUT'});
    // console.log(localStorage);
    navigate('/')
    dispatch(setCurrentUser(null))
  }

useEffect(()=>
{
  
  
  dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
},[dispatch])
  return (
   
    <nav>
      <div className='navbar'>
          <div className='nav-logo'>
               <Link to='/'>
               <img src={logo} alt='logo' width="150" height="100"/>
               </Link>   
          </div>
          <div className='nav-item nav-btn'>
          <a href="About" target="_self" rel="noreferrer"> About </a>
          </div>
          <div className='nav-item nav-btn'>
              <Link to='/Resources'>Resources</Link>
              
          </div>
          <div className='nav-item nav-btn'>
              <Link to='/practice'>Practice</Link>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
           {
            !User ?
            <Link to='/Auth'className='nav-item nav-links'>Log in</Link>:
              <>
                <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'>
                  <Link to='/Users' style={{color:"white",textDecoration:'none'}}>{User.result.name.charAt(0).toUppercase}

                  </Link>
                   T
                </Avatar>
                <button className='nav-item nav-links' onClick={handleLogout}>Logout</button>
              </>
           }
      </div>
    </nav>
  )

}

export default Navbar
