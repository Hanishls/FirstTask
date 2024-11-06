import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  function handleLogin(){
    navigate("/login")
  }
  return (
    <div className='container-fluid p-6 bg-dark text-white d-flex align-items-center justify-content-between'>
        {/* <div>
            <img src={Assets?.LsmediaLogo}/>
        </div> */}
       <a href='/'className='text-light text-decoration-none'><h1>LeadSense</h1></a>
        <div >
            <button className='btn btn-light me-3' onClick={handleLogin}>Login</button>
            <NavLink to="/register"><button className='btn btn-light me-3'>Register</button></NavLink>
            <button className='btn btn-light me-3'>Company Register </button>
        </div>
    </div>
  )
}

export default Header