import { useState } from "react"
import { fetchBook } from "../features/bookSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Search form functions to be imported into Header/Navgiation file
export default function SearchForm() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate();

// If user attempts to perform search without entering text, user will be prompted via alert to enter search terms
// Upon performing search action, app will always redirect to Main in the event that search is performed from Bookshelf page
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm) {
            alert('Please enter a search term.');
            return;
        }
        nav('/');
        dispatch(fetchBook(searchTerm));
    }

    return (
        <form onSubmit={handleSubmit} className="searchBar">
            <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="searchBtn">Search</button>
        </form>
    )
}