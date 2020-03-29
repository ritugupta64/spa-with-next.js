import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";

import { useEffect, useRef } from "react";

const semanticRules = () => {
  const mainPageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      mainPageRef.current.focus();
    }, 1000);
   // document.title = "page title"
  });

  return (
    <Layout>
      <div
        className="inner-container"
        ref={mainPageRef}
        aria-labelledby = "page-heading"
        tabIndex="-1"
      >
        <PageTitle title="page title Semantic rule" />
        <h1 id="page-heading">
           Don't use role attribute with semantic element until and unless its not required
        </h1>
        <nav className="navigation" aria-label="nav1" role="navigation">
          <a target="_blank" href="https://docs.google.com/spreadsheets/d/1q12cRzz7fUSOhzUuUC1C7hsh4O5mT4_tvcw6HG6iCzc/edit#gid=0">Accessibility Checklist</a>
          <a href="/css/">CSS</a>
          <a href="/js/">JavaScript</a>
          <a href="/jquery/">jQuery</a>
        </nav>
        <h2>if nav element is more than one</h2>
        <p>Then always use aria-label="unique-name"</p>
      
        <nav className="navigation" aria-label="nav2">
          <a href="/js/">JavaScript</a>
          <a href="/jquery/">jQuery</a>
        </nav>

      </div>
    </Layout>
  );
};

export default semanticRules;
