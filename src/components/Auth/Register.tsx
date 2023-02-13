import React from 'react'
import { redirect, Link } from 'react-router-dom';

const Register = ({setIsAuthorized}:{setIsAuthorized:React.Dispatch<React.SetStateAction<boolean>>}) => {


    const [data,setData] = React.useState({
        username:'',
        Email:'',
        Password:''
    })

    const onClickHandler = () =>{

        setIsAuthorized(prv=>!prv)
        // redirect('/')

    }

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
         setData({
            ...data,[e.target.name]:e.target.value
         })
    }

  return (
    <div className="login-box">
    <h2>Register</h2>
    <form>
      <div className="user-box">
        <input type="text" name="username" required={true} onChange={e=>onChangeHandler(e)}/>
        <label>Username</label>
      </div>
      <div className="user-box">
        <input type="text" name="Email" required={true} onChange={e=>onChangeHandler(e)}/>
        <label>Email</label>
      </div>
      <div className="user-box">
        <input type="password" name="Password" required={true} onChange={e=>onChangeHandler(e)}/>
        <label>Password</label>
      </div>
      <Link to='/' onClick={onClickHandler}>
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

export default Register