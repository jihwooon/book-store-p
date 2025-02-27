import styled from "styled-components";
import { Book } from "../../models/book.model";
import { getImgSrc } from "../../utils/image";
import { formatNumber } from "../../utils/format";
import { FaHeart } from "react-icons/fa";

interface Props {
  book: Book;
}

const BookItem = ({ book }: Props) => {
  return (
    <BookItemStyle>
      <div className="img">
        <img src={getImgSrc(book.id)} alt={book.title} />
      </div>
      <div className="content">
        <h2 className="title">{book.title}</h2>
        <p className="summary">{book.summary}</p>
        <p className="author">{book.author}</p>
        <p className="price">{formatNumber(book.price)}원</p>
        <div className="likes">
          <FaHeart />
          <span>{book.likes}</span>
        </div>
      </div>
    </BookItemStyle>
  );
};

const BookItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .img {
    border-radius:${(({ theme }) => theme.borderRadius.default)};
    overflow: hidden;
    img {
      max-width: 100%;
    }
  }


  .content {
    padding: 16px;
    position: relative;

    .title {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.color.secondary};
      font-weight: 700;
    }
    .summary {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      font-weight: 700;
    }
    .author {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
    }
    .price {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
    }

    .likes {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.primary};
      margin: 0 0 4px 0;
      font-weight: 700;
      border: 1px solid ${({ theme}) => theme.color.border};
      border-radius: ${({ theme }) => theme.borderRadius.default};
      padding: 4px 12px;
      position: absolute;
      bottom: 16px;
      right: 16px;

      svg {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`

export default BookItem;
