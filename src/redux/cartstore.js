import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'
import wishlistSlice from './slices/wishlistSlice'

const cartstore=configureStore({
    reducer:{
     productReducer: productSlice,
     wishlistReducer : wishlistSlice
    }
})
export default cartstore;