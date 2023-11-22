import React, { useState, useRef } from "react";
import "../../style/signup.css";
import { auth } from "../../common/firebase";
function SignUpScreen() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handlePage = () => {
    window.location.assign("/");
  };
  const handleLogin = () => {
    window.location.assign("SignIn");
  };
  return (
    <div className="SignUpBackground">
      <div>
        <img
          className="login-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="background-login"
          onClick={handlePage}
        />
        <div className="gradient"/>
      </div>
      <div className="SignUpScreen">
        <>
          <form>
            <h1> Sign Up</h1>
            <input ref={emailRef} type="email" placeholder="Email Address" />
            <input ref={passRef} type="password" placeholder="Password" />
            <button type="submit" onClick={register}>
              Sign Up
            </button>
            <h4>
              <span className="span-grey">Already Have Account ? </span>
              <span className="span-link" onClick={handleLogin}>
                Sign In Now.
              </span>
            </h4>
          </form>
        </>
      </div>
    </div>
  );
}

export default SignUpScreen;
