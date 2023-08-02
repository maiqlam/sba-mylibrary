const BookCard = ({ book, onDetailsClick }) => {
    const titleWords = book.title.split(' ');
    const shortTitle = titleWords.slice(0, 12).join(' ');

    return (
        <ul key={book.id} className="bookCard">
            <div className="bookCover">
                <img src={book.coverImg} alt={book.coverImg ? book.title : 'Photo unavailable'} />
            </div>
            <div className="bookTitle">
                <h3>{titleWords.length > 12 ? shortTitle + '...' : shortTitle}</h3>
                {/* </div>
                <div className="bookAuthor"> */}
                <h5>{book.authors ? book.authors.join(', ') : 'Unknown'}</h5>
                <div className="cardBtns">
                    <button onClick={() => onDetailsClick(book)}>Details</button>
                <button>Add to Bookshelf</button>
                </div>
                
            </div>
        </ul>
    );
}
export default BookCard;
