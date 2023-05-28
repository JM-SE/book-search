import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, Heading } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BooksContextProvider } from './store/BooksContext';
import BooksSearch from './views/BooksSearch';
import BookViewer from './views/BookViewer';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <BooksSearch />,
    },
    {
        path: 'book/:bookId',
        element: <BookViewer />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BooksContextProvider>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    <Heading pt={10} display="flex" justifyContent="center">
                        Book Encyclopaedia
                    </Heading>
                    <RouterProvider router={router} />
                </ChakraProvider>
            </QueryClientProvider>
        </BooksContextProvider>
    </React.StrictMode>
);
