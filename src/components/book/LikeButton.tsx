import styled from "styled-components";
import { BookDetail } from "../../models/book.model";
import Button from "../common/button";
import { FaHeart } from "react-icons/fa";

interface Props {
  book: BookDetail;
  onClick: () => void;
}

const LikeButton = ({ book, onClick }: Props) => {

  // 좋아요 버튼 클릭 시 scheme가 like로 표시되고 이벤트가 발생해야 한다.
  return (
    <LikeButtonStyle size="medium" scheme={book.liked ? "like" : "normal"} onClick={onClick}>
      <FaHeart />
      {book.likes}
    </LikeButtonStyle>
  );
}

const LikeButtonStyle = styled(Button)`
  display: flex;
  gap: 6px;

  svg {
    color: inherit;
    * {
      color: inherit;
    }
  }
`;

export default LikeButton;
