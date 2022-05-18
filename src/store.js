import {configureStore} from "@reduxjs/toolkit";
import rootReducer from"./Reducers/index"

const store = configureStore({
   reducer: {
      root: rootReducer,
   },
});
export default store;