import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from "../features/bookSlice";

const BookCard = ({ book, onDetailsClick }) => {
    const titleWords = book.title.split(' ');
    const shortTitle = titleWords.slice(0, 12).join(' ');
    const dispatch = useDispatch();
    const myBookshelf = useSelector(state => state.books.myBookshelf);
    const isInBookshelf = myBookshelf.some(b => b.id === book.id);

    const handleAddToBookshelf = () => {
        dispatch(addBook(book));
    }

    const handleRemoveFromBookshelf = () => {
        dispatch(removeBook(book.id));
    }

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
