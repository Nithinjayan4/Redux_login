import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { login } from '../Feature/UserSlice'
import '../Style/Log.css'




function Login() {
    const [name,SetName] = useState ('')
    const [email,SetEmail] = useState ('') 
    const [password,SetPassword] = useState ('')
    const dispatch = useDispatch();



    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn:true,
        }))
    }
  return (
    <div className='login'>
        <form className='login_form' onSubmit={(e)=> handleSubmit(e)}>
            <h1>
               Login💻 
            </h1>
            <input type='name' placeholder='Name' value={name} onChange={(e) =>SetName(e.target.value)}   />
            <input type='email' placeholder='Email'  value={email} onChange={(e) =>SetEmail(e.target.value) }   />
            <input type='Password' placeholder='Password'  value={password}   onChange={(e) =>SetPassword (e.target.value)}  />
            <button  type='submit ' className='submit_btn'  >submit</button>

        </form>


    </div>
  )
}
 
export default Login