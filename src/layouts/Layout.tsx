import { ReactElement } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

// 리액트에서 chlidren 속성은 ReactNode 또는 ReactElement 이다.
type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="inner">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
