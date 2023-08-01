import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBook = createAsyncThunk(
    "books/fetchBook",
    async (searchTerm) => {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyD0f0BqBEgxUMglHs2TzlFnbrA7q21T-wI&maxResults=30`);
        // .then(response => console.log(response.data));
        const books = response.data.items.map((book) => ({
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            coverImg: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : null,
        }));
        return books;
    }
)

const bookSlice = createSlice({
    name: "books",
    initialState: {
        books: [],

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.books = action.payload
        });
    },
})

export default bookSlice.reducer;