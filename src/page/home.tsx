import styled from "styled-components";
import Title from "../components/common/title";

const Home = () => {
  return (
    <HomeStyle>
      <Title size="large" color="secondary">제목 테스트</Title>
      <div>Header Text</div>
    </HomeStyle>
  );
};

const HomeStyle = styled.div``

export default Home;
