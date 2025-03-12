import React from "react";
import { FaSmileWink } from "react-icons/fa";
import styled from "styled-components";
import Title from "../common/title";
import { Link } from "react-router";

const BooksEmpty = React.memo(() => {
  return (
    <BooksEmptyStyle>
      <div className="icon" aria-label="검색 결과 없음">
        <FaSmileWink />
      </div>
      <Title size="large" color="text">검색 결과가 없습니다.</Title>
      <p>
        <Link to="/books">전체 검색 결과로 이동</Link>
      </p>
    </BooksEmptyStyle>
  );
});

BooksEmpty.displayName = 'BooksEmpty';

const BooksEmptyStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 12px;
  padding: 120px 0;

  .icon {
    svg {
      font-size: 4rem;
      fill: #ccc;
    }
  }
`

export default BooksEmpty;
