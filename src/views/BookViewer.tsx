import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from '@chakra-ui/react';
import BookData from '../components/BookData';

import { BooksContext } from '../store/BooksContext';
import { selectedBookInitial } from '../constants/selectedBookInitial';

const BookViewer = () => {
    const { selectedBook, setSelectedBook } = useContext(BooksContext);

    return (
        <Container h="100%" w="100%" p={5}>
            <Button mb={3} variant="outline" color="teal">
                <Link
                    to="/"
                    onClick={() => setSelectedBook(selectedBookInitial)}
                >
                    Back to search
                </Link>
            </Button>
            <BookData selectedBook={selectedBook} />
        </Container>
    );
};

export default BookViewer;
