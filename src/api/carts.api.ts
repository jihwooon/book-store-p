import { Cart } from "../models/cart.model";
import { httpClient } from "./http";

interface AddCartParams {
    book_id: number;
    quantity: number;
}

export const addCart = async (params: AddCartParams) => {
//   const response = await httpClient.post("/carts", params)

  return {
    success: true,
  };
}

export const fetchCart = async () => {
  // const response = await httpClient.get<Cart[]>("/carts")

  // Mock data as Cart[] array
  return [
    {
      id: 1,
      bookId: 101,
      title: "JavaScript 완벽 가이드",
      summary: "자바스크립트 언어의 핵심 기능과 프로그래밍 테크닉을 설명하는 완벽한 참고서",
      quantity: 2,
      price: 35000,
    },
    {
      id: 2,
      bookId: 102,
      title: "React 실전 프로그래밍",
      summary: "React 라이브러리를 이용한 웹 애플리케이션 개발 가이드",
      quantity: 1,
      price: 28000,
    },
  ];
}

export const deleteCart = async (cartId: number) => {
  const response = await httpClient.delete<Cart>(`/carts/${cartId}`)

  return response.data;
}
