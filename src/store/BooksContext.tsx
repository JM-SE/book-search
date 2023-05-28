import { useState, createContext, ReactNode } from 'react';
import { Book } from '../types/Book';
import { BookQuery } from '../types/BookQuery';
import { BooksStore } from '../types/BooksStore';

import { selectedBookInitial } from '../constants/selectedBookInitial';

export const BooksContext = createContext({} as BooksStore);

export const BooksContextProvider = ({ children }: { children: ReactNode }) => {
    const [books, setBooks] = useState<BookQuery | null>(null);
    const [selectedBook, setSelectedBook] = useState<Book>(selectedBookInitial);
    const [bookQuery, setBookQuery] = useState<string>('');
    const [currentListPage, setCurrentListPage] = useState<number>(0);

    return (
        <BooksContext.Provider
            value={{
                books,
                setBooks,
                selectedBook,
                setSelectedBook,
                bookQuery,
                setBookQuery,
                currentListPage,
                setCurrentListPage,
            }}
        >
            {children}
        </BooksContext.Provider>
    );
};
