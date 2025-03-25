import { Book, BookDetail } from "../models/book.model"
import { Pagination } from "../models/pagination.model"
import { httpClient } from "./http"

interface FetchBooksParams {
  category_id?: number
  news?: boolean
  currentPage?: number
  limit: number
}

interface FetchBooksResponse {
  books: Book[]
  pagination: Pagination
}

export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    const response = await httpClient.get<FetchBooksResponse>(
      "/books",
      {
        params: params,
      },
    )

    return {
      books: [
        {
          id: 1,
          title: "JavaScript 완벽 가이드",
          img: 101,
          category_id: 1,
          form: "paperback",
          isbn: "978-1491952023",
          summary: "자바스크립트 언어의 핵심 기능과 프로그래밍 테크닉을 설명하는 완벽한 참고서",
          detail: "자바스크립트 언어의 핵심 기능과 프로그래밍 테크닉을 설명하는 완벽한 참고서",
          author: "데이비드 플래너건",
          pages: 708,
          contents: "1장: 자바스크립트 소개\n2장: 어휘 구조\n3장: 타입, 값, 변수\n4장: 표현식과 연산자",
          price: 45000,
          likes: 528,
          pubDate: "2020-07-15",
        },
        {
          id: 2,
          title: "오브젝트",
          img: 102,
          category_id: 2,
          form: "paperback",
          isbn: "978-1491952023",
          summary: "자바스크립트 언어의 핵심 기능과 프로그래밍 테크닉을 설명하는 완벽한 참고서",
          detail: "이 책은 자바스크립트의 모든 측면을 다룹니다. 기본 개념부터 고급 기술까지 체계적으로 설명합니다. ES6 이후의 최신 문법과 API도 포함되어 있습니다.",
          author: "데이비드 플래너건",
          pages: 708,
          contents: "1장: 자바스크립트 소개\n2장: 어휘 구조\n3장: 타입, 값, 변수\n4장: 표현식과 연산자",
          price: 45000,
          likes: 528,
          pubDate: "2020-07-15",
        },
      ],
      pagination: {
        totalCount: 2,
        currentPage: 1,
      },
    }
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1,
      },
    }
  }
}

export const fetchBook = async (bookId: string | undefined) => {
  const response = await httpClient.get<BookDetail>(`/books/${bookId}`)

  return {
    id: 1,
    title: "JavaScript 완벽 가이드",
    img: 101,
    category_id: 1,
    form: "paperback",
    isbn: "978-1491952023",
    summary: "자바스크립트 언어의 핵심 기능과 프로그래밍 테크닉을 설명하는 완벽한 참고서",
    detail: `
      책은 인류 역사에서 가장 중요한 발명품 중 하나로, 지식과 문화를 전달하는 핵심 매체입니다. 
      책을 통해 우리는 과거의 지혜를 배우고, 미래의 가능성을 상상할 수 있습니다. 
      특히, 책은 다양한 문화와 사고방식을 이해하는 데 큰 도움을 줍니다.

      예를 들어, 고전 문학을 읽으면 과거의 사회적 배경과 인간의 심리를 깊이 있게 이해할 수 있습니다. 
      또한, 과학 서적을 통해 최신 기술과 발견을 배울 수 있습니다. 
      책은 단순히 정보를 전달하는 매체를 넘어, 독자의 사고를 확장시키고 창의력을 자극하는 역할을 합니다. 
      따라서, 책을 읽는 습관은 개인의 성장과 발전에 필수적이라고 할 수 있습니다.

      오늘날 디지털 기술의 발전으로 인해 전자책과 오디오북 등 새로운 형태의 책이 등장했지만, 
      여전히 책의 본질적인 가치는 변함이 없습니다. 
      앞으로도 책은 인간의 지적 탐구와 문화적 교류의 중심에 있을 것입니다.

      책의 역사는 인류 문명의 시작과 함께합니다. 
      초기 인류는 돌이나 점토판에 기록을 남겼고, 이는 점차 파피루스와 양피지로 발전했습니다. 
      중세 시대에는 수도원에서 필사본이 만들어졌으며, 이는 지식의 보존과 전파에 중요한 역할을 했습니다. 
      15세기 구텐베르크의 인쇄술 발명은 책의 대량 생산을 가능하게 했고, 
      이는 지식의 민주화와 계몽 운동의 촉매제가 되었습니다. 
      근대에 들어서는 출판 산업이 발달하면서 다양한 장르와 주제의 책이 출간되었고, 
      이는 대중의 지적 수준을 높이는 데 기여했습니다.

      책은 개인의 삶에 깊은 영향을 미칩니다. 
      어린 시절부터 책을 읽는 습관을 들이면 언어 능력과 사고력이 발달합니다. 
      책을 통해 새로운 세계를 경험하고, 다양한 인물의 삶을 간접적으로 체험함으로써 공감 능력이 향상됩니다. 
      또한, 책은 스트레스를 해소하고 정서적 안정을 제공하는 역할도 합니다. 
      특히, 자기계발서와 철학서는 독자에게 삶의 방향과 가치관을 제시하며, 개인의 성장을 돕습니다.

      책은 사회적 변화를 이끄는 중요한 도구이기도 합니다. 
      역사적으로, 책은 혁명과 사회 개혁의 원동력이 되었습니다. 
      예를 들어, 토머스 페인의 《상식》은 미국 독립 전쟁에 큰 영향을 미쳤고, 
      마르크스의 《자본론》은 사회주의 운동의 이론적 기반을 제공했습니다. 
      또한, 책은 인권과 평등을 위한 운동에서도 중요한 역할을 했습니다. 
      해리엇 비처 스토의 《톰 아저씨의 오두막》은 노예 제도 폐지 운동에 기여했고, 
      베티 프리든의 《여성의 신비》는 여성 해방 운동의 출발점이 되었습니다.

      현대 사회에서 책의 역할은 더욱 다양해지고 있습니다. 
      디지털 기술의 발전으로 전자책과 오디오북이 등장하면서, 책을 접하는 방식이 변화하고 있습니다. 
      전자책은 휴대성과 접근성이 뛰어나며, 오디오북은 이동 중에도 책을 즐길 수 있는 편리함을 제공합니다. 
      또한, 인터넷과 소셜 미디어의 발달로 독자와 작가 간의 소통이 활발해지고, 
      독자 참여형 콘텐츠가 증가하고 있습니다. 
      이러한 변화는 책의 형태와 기능을 확장시키고, 새로운 독자층을 형성하는 데 기여하고 있습니다.

      그러나 책의 본질적인 가치는 변함이 없습니다. 
      책은 여전히 깊이 있는 지식과 통찰을 제공하며, 독자의 사고를 확장시키고 창의력을 자극합니다. 
      특히, 급변하는 현대 사회에서 책은 안정감과 지적 만족을 제공하는 중요한 매체입니다. 
      따라서, 책을 읽는 습관은 개인의 성장과 발전에 필수적이며, 
      사회적 변화와 문화적 교류를 이끄는 중요한 도구로 자리 잡고 있습니다. 
      앞으로도 책은 인간의 지적 탐구와 문화적 교류의 중심에 있을 것입니다.

      책은 단순히 정보를 전달하는 매체를 넘어, 독자의 사고를 확장시키고 창의력을 자극하는 역할을 합니다. 
      따라서, 책을 읽는 습관은 개인의 성장과 발전에 필수적이라고 할 수 있습니다. 
      오늘날 디지털 기술의 발전으로 인해 전자책과 오디오북 등 새로운 형태의 책이 등장했지만, 
      여전히 책의 본질적인 가치는 변함이 없습니다. 
      앞으로도 책은 인간의 지적 탐구와 문화적 교류의 중심에 있을 것입니다.
    `,
    author: "데이비드 플래너건",
    pages: 708,
    contents: "1장: 자바스크립트 소개\n2장: 어휘 구조\n3장: 타입, 값, 변수\n4장: 표현식과 연산자",
    price: 45000,
    likes: 528,
    pubDate: "2020-07-15",
    categoryName: "소설",
    liked: true,
  }
}

export const likeBook = async (bookId: number) => {
  const response = await httpClient.post(`/likes/${bookId}`);

  return response.data;
}

export const unLikeBook = async (bookId: number) => {
  const response = await httpClient.delete(`/likes/${bookId}`);

  return response.data;
}