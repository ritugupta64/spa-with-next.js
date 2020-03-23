import { useEffect } from "react";
import Head from "next/head";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default PageTitle;
