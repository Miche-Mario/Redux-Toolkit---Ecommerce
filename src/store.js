import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./feature/productSlice"
import caertReducer from "./feature/cartSlice"

const globalStore = configureStore({
    reducer : {
        product: productReducer,
        cart: caertReducer
    }
})
export default globalStore