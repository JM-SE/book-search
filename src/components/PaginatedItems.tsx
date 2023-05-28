import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import ReactPaginate from 'react-paginate';

import { WrapItem, SimpleGrid } from '@chakra-ui/react';
import BookCard from './BookCard';
import { Book } from '../types/Book';

interface IPaginatedItemsProps {
    itemsPerPage: number;
    items: Book[];
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    setSelectedBook: Dispatch<SetStateAction<Book>>;
}

const PaginatedItems = ({
    itemsPerPage,
    items,
    currentPage,
    setCurrentPage,
    setSelectedBook,
}: IPaginatedItemsProps) => {
    const [currentItems, setCurrentItems] = useState<Book[]>([]);
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        setCurrentItems(items.slice(itemOffset, endOffset));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemOffset, itemsPerPage]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
        setCurrentPage(endOffset / 4);
    };

    return (
        <>
            <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                mb={8}
            >
                {currentItems?.map((book: Book) => (
                    <WrapItem key={book.key}>
                        <BookCard
                            book={book}
                            setSelectedBook={setSelectedBook}
                        />
                    </WrapItem>
                ))}
            </SimpleGrid>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                initialPage={currentPage}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={8}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default PaginatedItems;
