import styled from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";

const BooksList = () => {
  return (
    <BooksListStyle>
      <BookItem book={dummyBooks}/>
    </BooksListStyle>
  );
};

const BooksListStyle = styled.div``

export default BooksList;

export const dummyBooks: Book =
  {
    id: 1,
    title: "JavaScript 완벽 가이드",
    img: 101,
    category_id: 1,
    form: "paperback",
    isbn: "978-1491952023",
    summary: "자바스크립트 언어의 핵심 기능과 프로그래밍 테크닉을 설명하는 완벽한 참고서",
    detail: "이 책은 자바스크립트의 모든 측면을 다룹니다. 기본 개념부터 고급 기술까지 체계적으로 설명합니다. ES6 이후의 최신 문법과 API도 포함되어 있습니다.",
    author: "데이비드 플래너건",
    pages: 708,
    contents: "1장: 자바스크립트 소개\n2장: 어휘 구조\n3장: 타입, 값, 변수\n4장: 표현식과 연산자",
    price: 45000,
    likes: 528,
    pubDate: "2020-07-15"
  }
