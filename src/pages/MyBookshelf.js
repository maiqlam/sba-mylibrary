import { useSelector } from 'react-redux';
import { HeaderNav } from '../components/HeaderNav';

const MyBookshelf = () => {
    const myBookshelf = useSelector(state => state.books.myBookshelf);
    const unshelvedBooks = myBookshelf.filter(book => book.status === 'Unshelved');
    const completedBooks = myBookshelf.filter(book => book.status === 'Completed Reads');
    const wantToReadBooks = myBookshelf.filter(book => book.status === 'Want to Read');

    return (
        <div>
            <HeaderNav />
            <div className="bookshelf">
                <div className="column">
                    <h2>Unshelved</h2>
                    <ul>
                        {unshelvedBooks.map(book => (
                            <li key={book.id}>
                                <img src={book.coverImg} alt={book.coverImg ? book.title : 'Photo unavailable'} />
                                <h3>{book.title}</h3>
                                <h5>by {book.authors ? book.authors.join(', ') : 'Unknown'}</h5>
                                <button>Remove from Bookshelf</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="column">
                    <h2>Completed Reads</h2>
                    <ul>
                        {completedBooks.map(book => (
                            <li key={book.id}>
                                <img src={book.coverImg} alt={book.coverImg ? book.title : 'Photo unavailable'} />
                                <h3>{book.title}</h3>
                                <h5>by {book.authors ? book.authors.join(', ') : 'Unknown'}</h5>
                                <button>Remove from Bookshelf</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="column">
                    <h2>Want to Read</h2>
                    <ul>
                        {wantToReadBooks.map(book => (
                            <li key={book.id}>
                                <img src={book.coverImg} alt={book.coverImg ? book.title : 'Photo unavailable'} />
                                <h3>{book.title}</h3>
                                <h5>by {book.authors ? book.authors.join(', ') : 'Unknown'}</h5>
                                <button>Remove from Bookshelf</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MyBookshelf;
