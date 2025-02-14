import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Header Text</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  h1 {
    color: white;
  }
`

export default Header;
