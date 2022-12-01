import React from 'react';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/")
  }
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-xl mt-[30px] font-[700] mb-[30px] text-center">Choose a Login method</h1>
        <div className="text-black text-center">
          <div className="h-[50px] shadow-lg  w-[350px] rounded-lg flex items-center justify-center mb-[20px] cursor-pointer">
            <div>
              <p>Sign In with Email & Password</p>
            </div>
          </div>
          {/*  */}
          <div onClick={signInWithGoogle} className="h-[50px] shadow-lg rounded-lg  w-[350px] flex items-center justify-center mb-[20px] bg-blue-300 cursor-pointer hover:bg-blue-400 transition-all">
            <div>
              <p>Sign In with Google</p>
            </div>
          </div>
          {/*  */}
          <div className="h-[50px] shadow-lg w-[350px] rounded-lg flex items-center justify-center mb-[20px] bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all">
            <div>
              <p>Sign In with GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
