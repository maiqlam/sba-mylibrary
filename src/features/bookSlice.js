import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk to fetch book data from GoogleBooks API
// Default of 30 results to be rendered upon search
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
        }));
        return books;
    }
)

// Updates status of book after user adds to bookshelf and recategorizes as desired
export const updateStatus = createAction('books/updateStatus');

// Holds book data
const bookSlice = createSlice({
    name: "books",
    initialState: {
        books: [],
        myBookshelf: [],
    },
    reducers: {
        addBook: (state, action) => {
            state.myBookshelf.push(action.payload);
        },
        removeBook: (state, action) => {
            const bookId = action.payload;
            state.myBookshelf = state.myBookshelf.filter(book => book.id !== bookId);
        },
        resetSearchResults: (state) => {
            state.books = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.books = action.payload
        });
        builder.addCase(updateStatus, (state, action) => {
            const { id, status } = action.payload;
            const index = state.myBookshelf.findIndex(book => book.id === id);
            state.myBookshelf[index].status = status;
        });
    },
})

export const { addBook, removeBook, resetSearchResults } = bookSlice.actions;

export default bookSlice.reducer;