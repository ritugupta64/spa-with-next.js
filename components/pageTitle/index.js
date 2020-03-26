import { useEffect } from "react";
import Head from "next/head";

const PageTitle = ({ title }) => {

  return (
    <Head>
      <title aria-live="assertive" tabIndex="-1">{title}</title>
    </Head>
  );
};

export default PageTitle;
