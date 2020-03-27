import Head from "next/head";

import Footer from "../footer";

import "../../styles/style.css";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
