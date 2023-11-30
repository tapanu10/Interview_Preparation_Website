import * as api from '../api'
import { setCurrentUser } from './currentUser'
import axios from 'axios';



export const signup = (authData, navigate) => async (dispatch) => {
  
    try {
      const { data } = await api.signUp(authData);
      dispatch({ type: 'AUTH', data });//dispact data to redux
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    
    } catch (error) {
      console.log(error);
    }
  };
  

  export const login = (authData, navigate) => async (dispatch) => {
    console.log(authData);
    try {

      const data = await axios.post('http://localhost:3001'+'/user/login',authData);
      console.log('at 20',data);
      dispatch({ type: 'AUTH', data });
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    } catch (error) {
      console.log(error);
    }
  };