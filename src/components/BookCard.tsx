import { Link } from 'react-router-dom';
import { Book } from '../types/Book';
import { Dispatch, SetStateAction } from 'react';

import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Button,
    Heading,
} from '@chakra-ui/react';

const BookCard = ({
    book,
    setSelectedBook,
}: {
    book: Book;
    setSelectedBook: Dispatch<SetStateAction<Book>>;
}) => (
    <Card
        key={book.key}
        size="sm"
        minW="210"
        minH="180"
        maxW="210"
        variant="filled"
    >
        <CardHeader>
            <Heading size="sm">{book.title}</Heading>
        </CardHeader>
        <CardBody>- {book.author_name}</CardBody>
        <CardFooter display="flex" justifyContent="flex-end">
            <Button colorScheme="teal" variant="outline">
                <Link
                    to={`book/${book.key.slice(7)}`}
                    onClick={() => setSelectedBook(book)}
                >
                    More info
                </Link>
            </Button>
        </CardFooter>
    </Card>
);

export default BookCard;
