import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../features/bookSlice'

// Redux store
export const store = configureStore({
    reducer: {
        books: booksReducer,
    }
})