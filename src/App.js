import { useEffect } from "react";
import "./App.css";
import Home from "./components/router/HomeScreen";
import SignUpScreen from "./components/router/SignUpScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./common/firebase";
import SignInScreen from "./components/router/SignInScreen";
function App() {
  const User = null;
  useEffect(() => {
    const Login = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
        //Logged Out
      }
    });
    return Login;
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/SignUp" element={<SignUpScreen />} />
          <Route path="SignIn" element={<SignInScreen />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
