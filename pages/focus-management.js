import React, { useState, useEffect, useRef } from "react";

import Layout from "../components/layout";
import HelloWorld from "../components/focusManagement";
import PopUp from "../components/popup";
import PageTitle from "../components/pageTitle";

const textualMeaning = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mainPageRef = useRef(null);

  const isClose = () => {
    return setIsOpen(!isOpen);
  };
  const keyListener = e => {
    if (e.keyCode === 27) {
      isClose();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      mainPageRef.current.focus();
    }, 1000);
  });

  useEffect(() => {
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });
  return (
    <Layout>
      <PageTitle title="focus management" />
      <div
        className="inner-container"
        aria-labelledby="page-heading"
        ref={mainPageRef}
        tabIndex="-1"
      >
        <h1 id="page-heading">Take care of focus management</h1>
        <h2>1.Making non-focusable elements focusable</h2>
        <p>
          It’s possible to make non-focusable elements focusable by adding the
          tabindex attribute with an integer value. If the value is set to 0 the
          element becomes focusable and reachable via keyboard. If the value is
          a negative number, the element is focusable (e.g. with JavaScript) as
          well, but not reachable via keyboard. You can also use a value greater
          than 0, but that changes the natural tab order and is considered an
          anti-pattern.
        </p>
        <HelloWorld heading="hello world test message" />

        <h2>2.Great focus management is essential</h2>
        <p>
          It's important to make sure that our websites are navigable by
          keyboard. A lot of users rely on a keyboard when they surf the web.
          Among them are people with motor disabilities, blind people and people
          who don’t have hands or cannot use a mouse or track pad for whatever
          reason.
        </p>
        <button
          onClick={isClose}
          style={{
            padding: "10px"
          }}
          aria-haspopup="dialog"
        >
          Click on
        </button>
        {isOpen && (
          <PopUp
            heading="test heading"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            isClose={isClose}
          />
        )}
        <h2>
          The main keyboard features that are NOT disabled include the
          following:
        </h2>
        <ul>
          <li>
            The Tab key to go through focusable items, such as links, form
            elements, and anything with tabindex="0".
          </li>
          <li>
            The Enter or Return key to activate a link or button, or to submit a
            form.
          </li>
          <li>The space bar to activate a button or submit a form.</li>
        </ul>
      </div>
    </Layout>
  );
};

export default textualMeaning;
