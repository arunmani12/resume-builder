import React from 'react'
import { Link } from 'react-router-dom';


const Login = ({setIsAuthorized}:{setIsAuthorized:React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className="login-box">
    <h2>Login</h2>
    <form>
      <div className="user-box">
        <input type="text" name="" required={true}/>
        <label>Username</label>
      </div>
      <div className="user-box">
        <input type="password" name="" required={true}/>
        <label>Password</label>
      </div>
      <Link to='/' onClick={()=>setIsAuthorized(prv=>!prv)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </Link>
    </form>
  </div>
  )
}

export default Login