import Header from "./Header";
import {useState,useRef} from "react"
import { BG_URL } from "../utils/constants";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errormessage,seterrormessage] = useState(null);
    const dispatch = useDispatch();
    const name = useRef(null);
    const email= useRef(null);
    const password = useRef(null)
    const handleButtonClick = () => {
        const message = checkValidateData(email.current.value,password.current.value);
        seterrormessage(message);
        if(message) return;
        //Sign Up and Sign In Logic
        if(!isSignInForm){
          //Sign Up logic
          createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value,
                photoURL:  USER_AVATAR ,
              })
                .then(() => {
                  const { uid, email, displayName, photoURL } =
                    auth.currentUser;
                  dispatch(
                    addUser({
                      uid: uid,
                      email: email,
                      displayName: displayName,
                      photoURL: photoURL,
                    })
                  );
                })
                .catch((error) => {
                  seterrormessage(errormessage);
                });
              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrormessage(errorCode+"-"+errorMessage)
            });
        } else {
          //SignIn Logic
          signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrormessage(errorCode + "-" + errorMessage);
            });
        }
    }
    const toggleSingInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }
    return (
      <div>
        <Header />
        <div className="absolute">
          <img src={BG_URL} alt="background-img" />
        </div>
        <form onSubmit ={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && 
          (
             <input
             ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          /> 
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="py-2 text-red-500 font-bold text-lg">{errormessage}</p>
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
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