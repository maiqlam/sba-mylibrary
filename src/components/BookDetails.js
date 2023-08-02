const BookDetails = ({ selectedBook, onClose }) => {
    if (!selectedBook) return null;

    return (
        <div className="bookDetails">
        <div className="bookCoverLg">
        <img src={selectedBook.coverImg} alt={selectedBook.coverImg ? selectedBook.title : 'Photo unavailable'} />
            </div>
            <span className="close" onClick={onClose}>&times;</span>
            <h3>{selectedBook.title}</h3>
            <h4>{selectedBook.authors ? selectedBook.authors.join(', ') : 'Unknown'}</h4>
            <p className="description">{selectedBook.description ? selectedBook.description : 'Book summary not available.'}</p>
            <h5>Pages: {selectedBook.pageCount ? selectedBook.pageCount : 'N/A'}</h5>
            <h5>Publisher: {selectedBook.publisher ? selectedBook.publisher : 'N/A'}</h5>
            <h5>Published Date: {selectedBook.publishedDate ? selectedBook.publishedDate : 'N/A'}</h5>
            <h5>Literature genre: {selectedBook.genre ? selectedBook.genre : 'N/A'}</h5>
        </div>
    );
}
export default BookDetails;