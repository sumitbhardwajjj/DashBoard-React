import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/Slice";


const store = configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default store