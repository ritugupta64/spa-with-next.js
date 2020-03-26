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
        <h2>1.focus the page title</h2>
        <HelloWorld heading="hello world test message" />
  
        <h2>2. focus the popup</h2>
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
  );
};

export default textualMeaning;
