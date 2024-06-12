import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import moviereducer from "./moviesSlice";
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movie: moviereducer
        },
        devTools : true
    }
);

export default appStore