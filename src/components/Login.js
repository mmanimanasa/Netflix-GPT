import Header from "./Header";
import {useState} from "react"
import { BG_URL } from "../utils/constants";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSingInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }
    return (
      <div>
        <Header />
        <div className="absolute">
          <img src={BG_URL} alt="background-img" />
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && 
          (
             <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          /> 
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSingInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    );
};
export default Login;