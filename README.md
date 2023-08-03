## Netlify Deploy
[https://sba-mylibrary.netlify.app/](https://sba-mylibrary.netlify.app/)

## MyLibrary
MyLibrary serves as a database for texts and literature pulling from GoogleBooks API, allowing users to utilize its search engine to retrieve book summaries and other info, as well as add books to their virtual bookshelf.

Inside of My Bookshelf, the user can "shelf" books into two categories of completed readings and a "to read" list, and remove books from their shelf as desired.
Note: Books added initially will be "unshelved" by default until user opts to categorize book item.

## Technologies Used
MyLibrary utilizes React for UI build and Redux for state management, and is written in JavaScript and JSX.

1. React: Used to create and manage components that make up UI of MyLibrary (ex. book details rendered upon search).
   - BrowserRouter: Component of react-router-dom utilized to provide client-side routing and ease of browser navigation (ex. BrowserRouter, Router, Routes, Route, Link).

2. Redux ToolKit (RTK): Utilizes createAsyncThunk function to define asynchronous thunk action of fetchBook to retrieve search result data and createSlice function with defined actions to handle retrieved data (including bookshelf data built by user) to be stored, accessed, and updated through state management.

3. React Redux: Used to manage application's state and provide a way for components to access and update state through application use.

4. axios: Utilized within Redux function to retrieve data from external API through HTTP request to be stored in Redux store.

5. JavaScript, JSX, HTML: Used to define and create built-in DOM elements with specified attributes to build framework of application.

6. CSS: Used to style application through HTML named attributes (ex. className provided to elements).

## Clone instructions
To view MyLibrary locally, run `npm install` upon cloning within project's root directory. 
Next, run `npm start` to run app in development mode. App will be viewable within http://localhost:3000.

## Improvements to be made
Currently, bookshelf data is stored within Redux library and is only viable in a single session. Features to be tested in the future can include storing bookshelf data within localStorage to allow data to persist across multiple sessions. In addition to the user's bookshelf data being stored after session is closed, this function can also be used to store other information regarding the user's session, such as search history and books that have been viewed or previously removed from bookshelf.