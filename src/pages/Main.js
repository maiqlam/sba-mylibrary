import { useSelector } from "react-redux";
import SearchForm from "../components/SearchForm";

const Main = () => {
    const books = useSelector((state) => state.books.books);
    console.log(books);

    return (
        <div>
            <SearchForm />
            <div className="searchContainer">
                {books.map((book) => {
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
                        </div>
                            
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}
export default Main;