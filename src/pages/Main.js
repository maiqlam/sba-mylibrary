import { useSelector } from "react-redux";
import SearchForm from "../components/SearchForm";
import { useState } from "react";
import BookDetails from "../components/BookDetails";
import BookCard from "../components/BookCard";

const Main = () => {
    const books = useSelector((state) => state.books.books);
    const [selectedBook, setSelectedBook] = useState(null);
    const handleDetailsClick = (book) => {
        setSelectedBook(book);
    }
    const handleCloseClick = () => {
        setSelectedBook(null);
    }
    // console.log(books);

    return (
        <div>
            <SearchForm />
            <div className="searchContainer">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} onDetailsClick={handleDetailsClick} />
                ))}
            </div>
            {selectedBook && (
                <BookDetails selectedBook={selectedBook} onClose={handleCloseClick} />
            )}
        </div>
    );
}
export default Main;