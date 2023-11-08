import React, { useRef } from "react";
import "../../style/login.css";
import { auth } from "../../common/firebase";
function SignInScreen() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then(() => {
        alert("login success");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handlePage = () => {
    window.location.assign("/");
  };
  const handleRegister = () => {
    window.location.assign("SignUp");
  };
  return (
    <div className="SignUpBackground">
      <div className="SignUpScreen">
        <img
          className="login-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="background-login"
          onClick={handlePage}
        />
        <form>
          <h1> Sign In</h1>
          <input ref={emailRef} type="email" placeholder="Email Address" />
          <input ref={passRef} type="password" placeholder="Password" />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
          <h4>
            <span className="span-grey">Don't Have Account ? </span>
            <span className="span-link" onClick={handleRegister}>
              Sign Up Now.
            </span>
          </h4>
        </form>
      </div>
      <div className="gradient" />
    </div>
  );
}

export default SignInScreen;
