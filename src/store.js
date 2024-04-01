import { configureStore } from "@reduxjs/toolkit";
import { bookauthorslice } from "./reducer/bookauthorlist";

export const store = configureStore({
    reducer:{
        app:bookauthorslice.reducer
    }
})