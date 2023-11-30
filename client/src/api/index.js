import axios from 'axios'

export const logIn=async(authData)=>{
console.log('at 4',authData);
   
}
export const signUp=async(authData)=>{
    await axios.post('http://localhost:3001'+'/user/signup',authData);
}
