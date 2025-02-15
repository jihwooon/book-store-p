import styled from "styled-components";
import Title from "../components/common/title";
import Button from "../components/common/Button";

const Home = () => {
  return (
    <HomeStyle>
      <Title size="large" color="secondary">제목 테스트</Title>
      <Button size="large" scheme="primary" disabled={false}>버튼 테스트</Button>
      <div>Header Text</div>
    </HomeStyle>
  );
};

const HomeStyle = styled.div``

export default Home;
