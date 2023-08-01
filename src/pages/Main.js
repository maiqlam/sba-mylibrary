import { useSelector } from "react-redux";
import SearchForm from "../components/SearchForm";

const Main = () => {
    const books = useSelector((state) => state.books.books);
    // console.log(books);

    return (

        <div>
            <SearchForm />
            <div className="searchContainer">
                {books.map((book) => (
                <ul key={book.id} className="bookCard">
                    {book.title} by {book.authors ? book.authors.join(', ') : 'Unknown'}
                </ul>
            ))}
            </div>
            
        </div>
        
        

    );
}

export default Main;