import { Pagination } from './../models/pagination.model';
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Book } from "../models/book.model";
import { QUERYSTRING } from '../constants/querystring';
import { fetchBooks } from '../api/books.api';
import { LIMIT } from '../constants/pagination';

export const useBooks = () => {
    const location = useLocation()

    const [books, setBooks] = useState<Book[]>([]); 
    const [pagination, setPagination] = useState<Pagination>({
        totalCount: 0,
        currentPage: 1,
    }) 
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        const paramas = new URLSearchParams(location.search);

        fetchBooks({
            category_id: paramas.get(QUERYSTRING.CATEGORY_ID) ? Number(paramas.get(QUERYSTRING.CATEGORY_ID)) : undefined,
            news: paramas.get(QUERYSTRING.NEWS_KEY) ? true : undefined,
            currentPage: paramas.get(QUERYSTRING.PAGE) ? Number(paramas.get(QUERYSTRING.PAGE)) : 1,
            limit: LIMIT
        }).then(({ books, pagination }) => {
            setBooks(books)
            setPagination(pagination)
            setIsEmpty(books.length === 0)
        })
    }, [location.search])

    return { books, pagination, isEmpty };
}