import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import moviereducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movie: moviereducer,
            gpt: gptReducer,
            config: configReducer,
        },
        devTools : true
    }
);

export default appStore