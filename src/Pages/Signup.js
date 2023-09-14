import React, { useEffect } from 'react'
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import SignupSignin from "../Components/SignupSignin";

function Signup() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  

  useEffect(() => {
    if(token){
      navigate("/home");
    }
  })

  return (
    <div>
        <Header auth={false}/>
        <div className='wrapper'>
          <SignupSignin />
        </div>
    </div>
  )
}

export default Signup;