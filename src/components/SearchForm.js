import { useState } from "react"
import { fetchBook } from "../features/bookSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
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