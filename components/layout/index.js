import Head from "next/head";

import Footer from "../footer";

import "../../styles/style.css";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Accessibility-A11Y</h1>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
