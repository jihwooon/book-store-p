import styled from "styled-components";
import Button from "../common/button";
import { FaList, FaTh } from "react-icons/fa";
import { useSearchParams } from "react-router";
import { QUERYSTRING } from "../../constants/querystring";
import { useEffect } from "react";

const ViewOptions = [
  {
    value: "list",
    icon: <FaList />,
  },
  {
    value: "grid",
    icon: <FaTh />,
  },
]

export type ViewMode = 'grid' | 'list'

const BooksViewSwitcher = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSwitch = (value: ViewMode) => {
    const params = new URLSearchParams(searchParams)

    params.set(QUERYSTRING.VIEW, value)
    setSearchParams(params)
  }

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch("grid")
    }
  }, [])

  return (
    <BooksViewSwitcherStyle>
      {ViewOptions.map((option) => (
        <Button
          key={option.value}
          size="small"
          scheme={
            searchParams.get(QUERYSTRING.VIEW) === option.value
              ? 'primary'
              : 'normal'
          }
          onClick={() => handleSwitch(option.value as ViewMode)}
        >
          {option.icon}
        </Button>
      ))}
    </BooksViewSwitcherStyle>
  );
}

const BooksViewSwitcherStyle = styled.div`
  display: flex;
  gap: 10px;

  svg {
    fill: #ffff;
  }
`;

export default BooksViewSwitcher;
