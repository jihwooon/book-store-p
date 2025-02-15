import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <h1 className="logo">
        <img src={""} alt="book store" />
      </h1>
      <div className="copyright">
        <p>copyright(c) 2025. bookstore</p>
      </div>
    </FooterStyle>
  );
};
const FooterStyle = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layoutWidth.width.large};
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    img {
      width: 140px;
    }
  }

  .copyright {
    p {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.text};
    }
  }
`;
export default Footer;
