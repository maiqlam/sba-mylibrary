import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../features/bookSlice';

const BookDetails = ({ selectedBook, onClose }) => {
    const dispatch = useDispatch();
    const myBookshelf = useSelector(state => state.books.myBookshelf);
    const isInBookshelf = selectedBook && myBookshelf.some(b => b.id === selectedBook.id);

    const handleAddToBookshelf = () => {
        dispatch(addBook(selectedBook));
    }

    const handleRemoveFromBookshelf = () => {
        dispatch(removeBook(selectedBook.id));
    }

    return (
        <div className="bookDetails">
            <span className="close" onClick={onClose}>×</span>

            <div className="bookCoverLg">
                <img src={selectedBook.coverImg} alt={selectedBook.coverImg ? selectedBook.title : 'Photo unavailable'} />
            </div>
            
            <div className="bookInfo">
                <h3>{selectedBook.title}</h3>
                <h4>{selectedBook.authors ? selectedBook.authors.join(', ') : 'Unknown'}</h4>
                <p className="description">{selectedBook.description ? selectedBook.description : 'Book summary not available.'}</p>
                <h5>Pages: {selectedBook.pageCount ? selectedBook.pageCount : 'N/A'}</h5>
                <h5>Publisher: {selectedBook.publisher ? selectedBook.publisher : 'N/A'}</h5>
                <h5>Published Date: {selectedBook.publishedDate ? selectedBook.publishedDate : 'N/A'}</h5>
                <h5>Literature genre: {selectedBook.genre ? selectedBook.genre : 'N/A'}</h5>
                {isInBookshelf ? (
                    <button className="detailsBtn" onClick={handleRemoveFromBookshelf}>Remove from Bookshelf</button>
                ) : (
                    <button className="detailsBtn" onClick={handleAddToBookshelf}>Add to Bookshelf</button>
                )}
            </div>
            
        </div>
    );
}
export default BookDetails;
