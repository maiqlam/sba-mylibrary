import { useSelector } from 'react-redux';
import { HeaderNav } from '../components/HeaderNav';

const MyBookshelf = () => {
    const myBookshelf = useSelector(state => state.books.myBookshelf);

    return (
        <div>
            <HeaderNav />
            <ul>
                {myBookshelf.map(book => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <p>Status: {book.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default MyBookshelf;
