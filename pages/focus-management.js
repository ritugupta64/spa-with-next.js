import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import HelloWorld from "../components/focusManagement";
import PopUp from "../components/popup";
import PageTitle from "../components/pageTitle";

const textualMeaning = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isClose = () => {
    return setIsOpen(!isOpen);
  };
  const keyListener = e => {
    if (e.keyCode === 27) {
      isClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });
  return (
    <React.Fragment>
      <PageTitle title="focus management" />
      <Layout>
        <div className="inner-container">
          <h2>Take care of focus management</h2>
          <h3>1.focus the page title</h3>
          <HelloWorld heading="hello world test message" />
        </div>
        <hr />
        <div className="inner-container">
          <h3>2. focus the popup</h3>
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
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default textualMeaning;
