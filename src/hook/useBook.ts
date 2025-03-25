import { useEffect, useState } from "react"
import { BookDetail } from "../models/book.model"
import { fetchBook, likeBook, unLikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);

  const { isLoggedIn } = useAuthStore();
  const showAlert = useAlert();

  const likeToggle = () => {
    if (!isLoggedIn) {
      showAlert("로그인이 필요합니다.")
      return;
    }

    if (!book) {
      return
    };

    if (book.liked) {
      unLikeBook(book.id).then(() => {
        setBook({
          ...book,
          liked: false,
          likes: book.likes - 1,
        })
      })
    } else {
      likeBook(book.id).then(() => {
        setBook({
          ...book,
          liked: true,
          likes: book.likes + 1,
        })
      })
    }
  }

  useEffect(() => {
    fetchBook(bookId).then((res) => {
      setBook(res)
    })
  }, [bookId])

  return { book, likeToggle }
}
