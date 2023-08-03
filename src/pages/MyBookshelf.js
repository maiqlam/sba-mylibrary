import { useSelector } from 'react-redux';
import { HeaderNav } from '../components/HeaderNav';
import BookCard from '../components/BookCard';

const MyBookshelf = () => {
    const myBookshelf = useSelector(state => state.books.myBookshelf);

    return (
        <div>
            <HeaderNav />
            <ul>
                {myBookshelf.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </ul>
        </div>
    );
}
export default MyBookshelf;
