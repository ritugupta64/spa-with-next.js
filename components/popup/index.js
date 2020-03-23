import React, { useEffect, useRef, useState } from "react";

const PopUp = ({ heading, paragraph, isClose }) => {
  const popupElement = useRef(null);
  const [isActive, setIsActive] = useState('')

  useEffect(() => {
   setIsActive(document.activeElement)
  // console.log(document.activeElement, "activeElement")
    popupElement.current.focus();
  },[]);

  const handleEvent = (e) => {
   // console.log(e.key, '***')
     if(e.key === 'Tab'){
       e.preventDefault();
     }
     else{
       isActive.focus()
     }
  }
  return (
    <div className="pop-container">
      <div
        className="popup"
        ref={popupElement}
        role="dialog"
        aria-labelledby="dialog1Title"
        tabIndex="0"
      >
        <button id="close-btn" onClick={isClose} onKeyDown={handleEvent}>close</button>
        <h1 id="dialog1Title">{heading}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default PopUp;
