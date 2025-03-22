import { useParams } from "react-router";
import styled from "styled-components";
import { useBook } from "../hook/useBook";

const BookDetail = () => {
  const { bookId } = useParams()
  const { book } = useBook(bookId);

  if (!book) {
    return null;
  }

  return (
    <BookDetailStyle>
      <h1>{book.author}</h1>
    </BookDetailStyle>
  );
}

const BookDetailStyle = styled.div``;

export default BookDetail;
