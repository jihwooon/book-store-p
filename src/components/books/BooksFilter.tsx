import styled from "styled-components";
import { useCategory } from "../../hook/useCategory";
import Button from "../common/button";

const BooksFilter = () => {
  const { categories } = useCategory();

  return (
    <BooksFilterStyle>
      <div className="category">
        {categories.map((item) => (
          <Button
            key={item.id}
            size="small"
            scheme="normal"
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button
          size="small"
          scheme="normal"
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
