import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../features/bookSlice';

export const useAddToBookshelf = (book) => {
    const [showStatusForm, setShowStatusForm] = useState(false);
    const [bookStatus, setBookStatus] = useState('');
    const dispatch = useDispatch();

    const handleAddToBookshelf = () => {
        setShowStatusForm(true);
    }

    const handleStatusSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook({ ...book, status: bookStatus }));
        setShowStatusForm(false);
        setBookStatus('');
    }

    return {
        showStatusForm,
        bookStatus,
        setBookStatus,
        handleAddToBookshelf,
        handleStatusSubmit,
    };
}
