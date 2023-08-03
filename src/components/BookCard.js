import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from "../features/bookSlice";

// Search result items rendered in card display
const BookCard = ({ book, onDetailsClick }) => {
    const titleWords = book.title.split(' ');
    const shortTitle = titleWords.slice(0, 12).join(' ');
    const dispatch = useDispatch();
    const myBookshelf = useSelector(state => state.books.myBookshelf);
    const isInBookshelf = myBookshelf.some(b => b.id === book.id);

// User has option to add to or remove from bookshelf from search results
    const handleAddToBookshelf = () => {
        dispatch(addBook({...book, status: 'Unshelved'}));
    }    

    const handleRemoveFromBookshelf = () => {
        dispatch(removeBook(book.id));
    }
    
// Rendered search results check for existing book cover from API database, displays text of 'Photo unavailable' if not found
// If book title exceeds 12 words, title is shortened
    return (
        <ul key={book.id} className="bookCard">
            <div className="bookCover">
                <img src={book.coverImg} alt={book.coverImg ? book.title : 'Photo unavailable'} />
            </div>
            <div className="bookTitle">
                <h3>{titleWords.length > 12 ? shortTitle + '...' : shortTitle}</h3>
                <h5>{book.authors ? book.authors.join(', ') : 'Unknown'}</h5>
                <div className="cardBtns">
                    <button onClick={() => onDetailsClick(book)}>Details</button>
                    {isInBookshelf ? (
                        <button onClick={handleRemoveFromBookshelf}>Remove from Bookshelf</button>
                    ) : (
                        <button onClick={handleAddToBookshelf}>Add to Bookshelf</button>
                    )}
                </div>
            </div>
        </ul>
    );
}

export default BookCard;
