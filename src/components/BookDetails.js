const BookDetails = ({ selectedBook, onClose }) => {
    if (!selectedBook) return null;

    return (
        <div className="bookDetails">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>{selectedBook.title}</h2>
            <h4>{selectedBook.authors ? selectedBook.authors.join(', ') : 'Unknown'}</h4>
            {/* Add additional book details here */}
        </div>
    );
}
export default BookDetails;