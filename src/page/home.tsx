import styled from "styled-components";
import Title from "../components/common/title";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";

const Home = () => {
  return (
    <HomeStyle>
      <Title size="large" color="secondary">제목 테스트</Title>
      <Button size="large" scheme="primary" disabled={false}>버튼 테스트</Button>
      <InputText placeholder="여기에 입력하세요" />
      <div>Header Text</div>
    </HomeStyle>
  );
};

const HomeStyle = styled.div``

export default Home;
