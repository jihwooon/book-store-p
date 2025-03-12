import styled from "styled-components";
import { Pagination as IPagination } from "../../models/pagination.model";
import { LIMIT } from "../../constants/pagination";
import Button from "../common/button";
import { useSearchParams } from "react-router";
import { QUERYSTRING } from "../../constants/querystring";

interface Props {
  pagination: IPagination;
}

const Pagenation = ({ pagination }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { totalCount, currentPage } = pagination
  const page: number = Math.ceil(totalCount / LIMIT)

  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set(QUERYSTRING.PAGE, page.toString())
    setSearchParams(newSearchParams)
  }

  return (
    <PagenationStyle>
      {page > 0 && (
          <ol>
            {Array(page).fill(0).map((_, index) => (
                <li>
                  <Button
                    key={index}
                    size="small"
                    scheme={index + 1 === currentPage ? 'primary' : 'normal'}
                    onClick={() => handleClickPage(index + 1)}
                  >
                    {index + 1}
                  </Button>
                </li>
            ))}
          </ol>
        ) 
      }
    </PagenationStyle>
  );
};

const PagenationStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;

  ol {
    list-style: none;
    display: flex;
    gap: 8px;
    padding: 0;
    margin: 0;
  }
`

export default Pagenation;
