import { FormEvent, useContext, useState } from 'react';
import { useQuery } from 'react-query';

import { Button, Input, Container } from '@chakra-ui/react';
import PaginatedItems from '../components/PaginatedItems';
import AlertMessage from '../components/Alert';

import { fetchBooks } from '../services/fetchBooks';
import { BooksContext } from '../store/BooksContext';

const BooksSearch = () => {
    const [error, setError] = useState(false);
    const {
        books,
        setBooks,
        setSelectedBook,
        bookQuery,
        setBookQuery,
        currentListPage,
        setCurrentListPage,
    } = useContext(BooksContext);

    const { refetch, isLoading, remove } = useQuery(
        'book-search',
        () => fetchBooks(bookQuery),
        {
            refetchOnWindowFocus: false,
            enabled: false,
            onSuccess: (data) => {
                setBooks(data);
            },
            onError: () => setError(true),
        }
    );

    const handleClick = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        refetch();
    };

    const queryHasBooks = books && books?.docs?.length > 0;

    const onClearHandler = () => {
        setBooks(null);
        setBookQuery('');

        return remove();
    };

    return (
        <Container h="100%" w="100%" p={5}>
            <form onSubmit={handleClick}>
                <Container display="flex" alignItems="center" mb={5}>
                    <Input
                        type="text"
                        style={{ border: '1px solid black' }}
                        onChange={(e) => setBookQuery(e.target.value)}
                        value={bookQuery}
                        placeholder="Search a book"
                        variant="outline"
                        size="lg"
                        disabled={!!queryHasBooks}
                    />
                    {queryHasBooks ? (
                        <>
                            <Button
                                type="button"
                                ml={2}
                                onClick={onClearHandler}
                            >
                                Clear search
                            </Button>
                        </>
                    ) : (
                        <Button
                            type="submit"
                            colorScheme="teal"
                            variant="solid"
                            isLoading={isLoading}
                            ml={2}
                        >
                            Search
                        </Button>
                    )}
                </Container>
            </form>
            <Container>
                {(books?.numFound === 0 || error) && (
                    <AlertMessage
                        status="error"
                        title={
                            error
                                ? 'Server error'
                                : `We couldn't find any book!`
                        }
                        description={
                            error
                                ? 'Please try again later.'
                                : 'Please try a different book name.'
                        }
                    />
                )}
                {queryHasBooks && (
                    <PaginatedItems
                        itemsPerPage={4}
                        currentPage={currentListPage}
                        setCurrentPage={setCurrentListPage}
                        items={books.docs}
                        setSelectedBook={setSelectedBook}
                    />
                )}
            </Container>
        </Container>
    );
};

export default BooksSearch;
