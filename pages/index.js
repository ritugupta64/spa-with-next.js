/**
 * Determines if we are running on server or in client.
 * @return {boolean} true if running on server
 */
function getIsServerRendered() {
  return typeof window === "undefined";
}

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/react-axe
 */
if (process.env.NODE_ENV !== "production" && !getIsServerRendered()) {
  const ReactDOM = require("react-dom");
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";

const Home = () => (
  <div className="container">
    <Layout>
      <PageTitle title="Accessibility" />
      <div className="inner-container">
        <p>
          Accessibility means that people with some type of disability will be
          able to use the Web.
        </p>
      </div>
    </Layout>
  </div>
);

export default Home;
