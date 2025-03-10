import styled from "styled-components";
import { useCategory } from "../../hook/useCategory";
import Button from "../common/button";
import { useSearchParams } from "react-router";

const BooksFilter = () => {
  const { categories } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams(); 

  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (id === null) {
      newSearchParams.delete('category_id') 
    } else {
      newSearchParams.set('category_id', id.toString());
    }

    setSearchParams(newSearchParams);
  }

  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.get('news')) {
      newSearchParams.delete('news')
    } else {
      newSearchParams.set('news', "true");
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
          scheme={searchParams.get('news') ? 'primary' : "normal"}
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
