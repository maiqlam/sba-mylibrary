import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import BookDetails from "../components/BookDetails";
import BookCard from "../components/BookCard";
import { HeaderNav } from "../components/HeaderNav";
import { resetSearchResults } from "../features/bookSlice";

const Main = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books);
    const [selectedBook, setSelectedBook] = useState(null);
    const handleDetailsClick = (book) => {
        setSelectedBook(book);
    }
    const handleCloseClick = () => {
        setSelectedBook(null);
    }
    
    useEffect(() => {
        return () => {
            dispatch(resetSearchResults());
        }
    }, [dispatch]);

    return (
        <div>
            <HeaderNav />
            <div className="searchContainer">
                {books.length > 0 ? (
                    books.map((book) => (
                        <BookCard key={book.id} book={book} onDetailsClick={handleDetailsClick} />
                    ))
                ) : (
                    <p className="intro">Welcome to MyLibrary!<br /><br /> Search from our database of over thousands of published texts and discover your next read, or build your own virtual bookshelf to keep track of your reads! </p>
                )}
            </div>
            {selectedBook && (
                <BookDetails selectedBook={selectedBook} onClose={handleCloseClick} />
            )}
        </div>
    );
}
export default Main;
