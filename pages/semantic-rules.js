import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";

const semanticRules = () => {
  return (
    <Layout>
      <PageTitle title = "Semantic rule" />
      <div className="inner-container">
        <h2>Don't use role attribute with semantic elements</h2>
        <nav className="navigation" aria-label = "nav1">
          <a href="/html/">HTML</a>
          <a href="/css/">CSS</a>
          <a href="/js/">JavaScript</a>
          <a href="/jquery/">jQuery</a>
        </nav>
      </div>
    </Layout>
  );
};

export default semanticRules;
