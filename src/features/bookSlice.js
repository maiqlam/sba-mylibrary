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
            publisher: book.volumeInfo.publisher,
            publishedDate: book.volumeInfo.publishedDate,
            description: book.volumeInfo.description,
            pageCount: book.volumeInfo.pageCount,
            genre: book.volumeInfo.categories,
            // selfLink: book.selfLink,
        }));
        return books;
    }
)

// export const fetchBookDetails = createAsyncThunk(
//     "bookDetails/fetchBookDetails",
//     async (selfLink) => {
//         const response = await axios.get(`${selfLink}`);
//         const book = response.data;
//         const details = {
//             id: book.id,
//             title: book.volumeInfo.title,
//             authors: book.volumeInfo.authors,
//             coverImgLg: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.extraLarge : null,
//             publisher: book.volumeInfo.publisher,
//             publishedDate: book.volumeInfo.publishedDate,
//             description: book.volumeInfo.description,
//             pageCount: book.volumeInfo.pageCount,
//             genre: book.volumeInfo.categories,
//         };
//         return details;
//     }
// )

const bookSlice = createSlice({
    name: "books",
    initialState: {
        books: [],
        // bookDetails: null,

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.books = action.payload
        });
        // builder.addCase(fetchBookDetails.fulfilled, (state, action) => {
        //     state.bookDetails = action.payload
        // });
    },
})

export default bookSlice.reducer;