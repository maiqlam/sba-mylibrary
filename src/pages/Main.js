import { useSelector } from "react-redux";
import SearchForm from "../components/SearchForm";

const Main = () => {
    const books = useSelector((state) => state.books.books);
    console.log(books);

    return (
        <div className="main">
        <h1>MyLibrary</h1>
        <SearchForm />
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    {book.title} by {book.authors}
                </li>
            ))}
        </ul>
    </div>
    );
}

export default Main;