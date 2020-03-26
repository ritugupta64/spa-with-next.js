import { useEffect, useRef } from "react";

import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";

import DebuggingImg from "../static/media/axe-debug.png";

const textualMeaning = () => {
  const mainPageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      mainPageRef.current.focus();
    }, 1000);
  });

  return (
    <Layout>
      <PageTitle title="Notification Accessible" />
      <div
        className="inner-container"
        ref={mainPageRef}
        aria-labelledby="page-heading"
        tabIndex="-1"
      >
        <h1 id="page-heading">Debugging tool</h1>
        <p>
          It will help you to fix the bugs while running the code, So there are
          few things which you need to implement.
        </p>
        <ul>
          <li>
            import the react-axe package. To write the command npm install
            react-axe
          </li>
          <li>
            dump all this code in your app.js file because its every where
            Accessible
          </li>
        </ul>
        <img src={DebuggingImg} alt="debugging tool" width="500"/>
      </div>
    </Layout>
  );
};

export default textualMeaning;
