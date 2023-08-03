import { useDispatch, useSelector } from 'react-redux';
import { HeaderNav } from '../components/HeaderNav';
import { removeBook, updateStatus } from '../features/bookSlice';

const MyBookshelf = () => {
    const dispatch = useDispatch();
    const myBookshelf = useSelector(state => state.books.myBookshelf);
    const unshelvedBooks = myBookshelf.filter(book => book.status === 'Unshelved');
    const completedBooks = myBookshelf.filter(book => book.status === 'Completed Reads');
    const wantToReadBooks = myBookshelf.filter(book => book.status === 'Want to Read');

    const handleStatusChange = (e, id) => {
        dispatch(updateStatus({id, status: e.target.value}));
    }

    const handleRemoveFromBookshelf = (id) => {
        dispatch(removeBook(id));
    }

    return (
        <div>
            <HeaderNav />
            <div className="bookshelf">
                <div className="column">
                    <h2>Unshelved</h2>
                    <ul>
    {unshelvedBooks.map(book => (
        <li key={book.id}>
            <div className="shelfItem">
                <div className='shelfCover'>
                    <img src={book.coverImg} alt={book.coverImg ? book.title : 'Photo unavailable'} />
                </div>
                <div className="shelfTitle">
                    <h3>{book.title}</h3>
                    <h5>by {book.authors ? book.authors.join(', ') : 'Unknown'}</h5>
                </div>
            </div>
            <div className='shelfCategorize'>
                <select value={book.status} onChange={(e) => handleStatusChange(e, book.id)}>
                    <option value="" >Select a shelf:</option>
                    <option value="Completed Reads">Completed</option>
                    <option value="Want to Read">Want to Read</option>
                </select>
                <button onClick={() => handleRemoveFromBookshelf(book.id)}>Remove from Bookshelf</button>
            </div>
        </li>
    ))}
</ul>

                </div>
                <div className="column">
                    <h2>Completed Reads</h2>
                    <ul>
                        {completedBooks.map(book => (
                            <li key={book.id}>
            <div className="shelfItem">
                <div className='shelfCover'>
                    <img src={book.coverImg} alt={book.coverImg ? book.title : 'Photo unavailable'} />
                </div>
                <div className="shelfTitle">
                    <h3>{book.title}</h3>
                    <h5>by {book.authors ? book.authors.join(', ') : 'Unknown'}</h5>
                </div>
            </div>
            <div className='shelfCategorize'>
                <select value={book.status} onChange={(e) => handleStatusChange(e, book.id)}>
                    <option value="" disabled>Select a shelf:</option>
                    <option value="Completed Reads">Completed</option>
                    <option value="Want to Read">Want to Read</option>
                </select>
                <button onClick={() => handleRemoveFromBookshelf(book.id)}>Remove from Bookshelf</button>
            </div>
        </li>
                        ))}
                    </ul>
                </div>
                <div className="column">
                    <h2>Want to Read</h2>
                    <ul>
                        {wantToReadBooks.map(book => (
                            <li key={book.id}>
            <div className="shelfItem">
                <div className='shelfCover'>
                    <img src={book.coverImg} alt={book.coverImg ? book.title : 'Photo unavailable'} />
                </div>
                <div className="shelfTitle">
                    <h3>{book.title}</h3>
                    <h5>by {book.authors ? book.authors.join(', ') : 'Unknown'}</h5>
                </div>
            </div>
            <div className='shelfCategorize'>
                <select value={book.status} onChange={(e) => handleStatusChange(e, book.id)}>
                    <option value="" disabled>Select a shelf:</option>
                    <option value="Completed Reads">Completed</option>
                    <option value="Want to Read">Want to Read</option>
                </select>
                <button onClick={() => handleRemoveFromBookshelf(book.id)}>Remove from Bookshelf</button>
               
            </div>
        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MyBookshelf;
