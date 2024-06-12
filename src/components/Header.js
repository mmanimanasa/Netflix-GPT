import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import {  signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
          });

    }
        useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            } else {
              dispatch(removeUser());
              navigate("/")
            }
          });
          return () => unsubscribe();
        },[]);
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo"/>
               {user && <div className="flex p-2 justify-between">
                      <img className="w-12 h-12" alt="userIcon" src ={user.photoURL}/>   
                    <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
               </div> }
        </div>
    )
}
export default Header;