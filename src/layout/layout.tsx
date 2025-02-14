import Footer from "../components/common/footer";
import Header from "../components/common/header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
