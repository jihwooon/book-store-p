import styled from "styled-components";
import { useCategory } from "../../hook/useCategory";
import Button from "../common/button";
import { useSearchParams } from "react-router";
import { QUERYSTRING } from "../../constants/querystring";

const BooksFilter = () => {
  const { categories } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams(); 

  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (id === null) {
      newSearchParams.delete(QUERYSTRING.CATEGORY_ID) 
    } else {
      newSearchParams.set(QUERYSTRING.CATEGORY_ID, id.toString());
    }

    setSearchParams(newSearchParams);
  }

  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.get(QUERYSTRING.NEWS_KEY)) {
      newSearchParams.delete(QUERYSTRING.NEWS_KEY)
    } else {
      newSearchParams.set(QUERYSTRING.NEWS_KEY, "true");
    }

    setSearchParams(newSearchParams);
  }

  return (
    <BooksFilterStyle>
      <div className="category">
        {categories.map((item) => (
          <Button
            key={item.id}
            size="small"
            scheme={item.isActive ? 'primary' : 'normal'}
            onClick={() => handleCategory(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button
          size="small"
          scheme={searchParams.get(QUERYSTRING.NEWS_KEY) ? 'primary' : "normal"}
          onClick={() => handleNews()}
        >
          신간
        </Button>
      </div>
    </BooksFilterStyle>
  );
};

const BooksFilterStyle = styled.div`
  display: flex;
  gap: 24px;

  .category {
    display: flex;
    gap: 8px;
  }
`

export default BooksFilter;
