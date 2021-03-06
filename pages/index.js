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

import { useEffect, useRef } from "react";

import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";

const Home = () => {
  const mainPageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      mainPageRef.current.focus();
    }, 1000);
  });

  return (
    <Layout>
      <div
        className="container"
        ref={mainPageRef}
        aria-labelledby="page-heading"
        tabIndex="-1"
      >
        <PageTitle title="Accessibility" />
        <div className="inner-container">
          <h1 id="page-heading">Accessibility-A11Y</h1>
          <p>
            Accessibility means that people with some type of disability will be
            able to use the Web.
          </p>

          <h2>There are four principles of accessibility, we called POUR</h2>
          <ol>
            <li>
              <strong>Perceivable -</strong> Perceivable states that users must
              be able to perceive it in some way, using one or more of their
              senses.
            </li>
            <li>
              <strong>Operable -</strong> User interface components and
              navigation must be operable. This means that users must be able to
              operate the interface
            </li>
            <li>
              <strong>Understandable -</strong> Understandable states that
              information and the operation of user interface must be
              understandable.
            </li>
            <li>
              <strong>Robust -</strong>Robust states that content must be robust
              enough that it can be interpreted reliably by a wide variety of
              user agents, including assistive technologies.
            </li>
          </ol>
          <h2>What can ARIA do?</h2>
          <p>ARIA allows you to communicate to the screen readers:</p>
          <ul>
            <li>aria-hidden</li>
            <li>aria-label</li>
            <li>aria-labelledby</li>
            <li>role</li>
            <li>aria-describedby</li>
          </ul>
          <span>**Note:</span>
          <ul>
            <li>most the screenreader doesn't support aria-describedby</li>
            <li>Don't Invent Roles</li>
            <li>
              One of the
              strengths of the aria-labelledby attribute is that it allows you
              to refer to multiple selections of text and apply them all
              together to label an element. This can be especially useful for
              labeling complex forms, such as those laid out in a grid in which
              multiple labels can apply to a single form field.
            </li>
          </ul>
          {/* <span id="males"> ... <span id="frank"> ... <span id="ranking"> 
<input type="text" aria-labelledby="males frank ranking"></input> */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
