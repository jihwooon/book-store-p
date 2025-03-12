import styled from "styled-components";
import Title from "../components/common/title";
import BooksList from "../components/books/BooksList";
import BookEmpty from "../components/books/BooksEmpty";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import BooksFilter from "../components/books/BooksFilter";
import Pagination from "../components/books/Pagination";
import { useBooks } from "../hook/useBooks";

const Books = () => {
  const { books, isEmpty, pagination } = useBooks();

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher/>
        </div>
        {!isEmpty && <BooksList books={books} />}
        {isEmpty && <BookEmpty />}
        {!isEmpty && <Pagination pagination={pagination} />}
      </BooksStyle>
    </>
  );
};

const BooksStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-item: center;
    padding: 20px 0;
  }
`

export default Books;
