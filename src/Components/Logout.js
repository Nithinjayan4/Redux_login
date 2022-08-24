import React from 'react'
import { logout, selectUser } from '../Feature/UserSlice';
import '../Style/Log.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/exports'

function Logout() {
    const user =useSelector(selectUser);
    const dispatch = useDispatch ();
    const handleLogout=(e)=>{
        e.preventDefault();
        // const dispatch = useDispatch ();
        dispatch(logout())

    }
  return (
    <div>
        <h1>
            Welcome <span className='user_name'>{user.name}</span>
            <button className='logout_button' onClick={(e)=> handleLogout(e)}>Logout</button>
        </h1>


    </div>
  )
}

export default Logout