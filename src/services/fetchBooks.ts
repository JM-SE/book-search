import axios from 'axios';
import { apiUrl } from '../constants/apiUrl';

export const fetchBooks = async (q: string) => {
    const { data } = await axios.get(`${apiUrl}?q=${q}`);

    return data;
};
