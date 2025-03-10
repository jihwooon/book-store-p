import styled from "styled-components";
import Title from "../components/common/title";
import BooksList from "../components/books/BooksList";
import BookEmpty from "../components/books/BooksEmpty";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import BooksFilter from "../components/books/BooksFilter";
import Pagination from "../components/books/Pagination";
import { useBooks } from "../hook/useBooks";

const Books = () => {
  const { books, isEmpty } = useBooks();

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <BooksFilter />
        <BooksViewSwitcher/>
        {!isEmpty && <BooksList books={books} />}
        {isEmpty && <BookEmpty />}
        {!isEmpty && <Pagination />}
      </BooksStyle>
    </>
  );
};

const BooksStyle = styled.div`
`

export default Books;
