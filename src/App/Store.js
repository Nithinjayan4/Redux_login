import { configureStore } from "@reduxjs/toolkit"; 
import  useReducer  from "../Feature/UserSlice";
export default configureStore({
    reducer:{
        user:useReducer,
    }
}) 