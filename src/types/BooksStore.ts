import { Dispatch, SetStateAction } from 'react';
import { Book } from './Book';
import { BookQuery } from './BookQuery';

export type BooksStore = {
    books: BookQuery | null;
    setBooks: (books: BookQuery | null) => void;
    selectedBook: Book;
    setSelectedBook: Dispatch<SetStateAction<Book>>;
    bookQuery: string;
    setBookQuery: (bookQuery: string) => void;
    currentListPage: number;
    setCurrentListPage: Dispatch<SetStateAction<number>>;
};
