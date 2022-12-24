import React, {createContext, useState} from 'react';
import {v4} from 'uuid'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {
            id: 1,
            author: 'Saint Brisa',
            title: 'Book 1',
        },
        {
            id: 2,
            author: 'Laurent Don',
            title: 'Book 2',
        },
        {
            id: 1,
            author: 'The Voice',
            title: 'Book 3',
        },
    ]);

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: v4() }])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    };

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>    
    )
}

export default BookContextProvider;