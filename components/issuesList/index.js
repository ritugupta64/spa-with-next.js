import React from 'react';
import BannerImg from '../../static/media/banner1.jpg';
import fixture1 from '../../static/media/fixture1.png';
import Card2 from '../../static/media/card2.jpg';
import Card3 from '../../static/media/Card3.jpg';
import Card4 from '../../static/media/Card4.jpg';

import '../../styles/style.css';

function Defects() {
  return (
    <>
    <div className="IssueList">
        <h1>Dekstop Web Issues</h1>
        <ul>
            {/* 1.Elements should not have tabindex greater than zero */}
            <li><a href={fixture1} aria-label="Issue 1" target="new">Unexpected tab order due to which some elements are skipped
            entirely</a></li>
            {/* 2.ARIA roles used must confirm to valid values */}
            <li><a href="" aria-label="Issue 2">Screen Reader is communicating incorrect role of the element on 
            the page to the user</a></li>
            
            
            
            <li><a href="" aria-label="Issue ">Inappropriate or missing Page title</a></li>
            <li><a href="" aria-label="Issue ">Document must have one main landmark</a></li>
            <li><a href="" aria-label="Issue ">Links must have discernible text</a></li>
            <li><a href="" aria-label="Issue ">Ensure that scrollable region has keyboard access</a></li>
            <li><a href="" aria-label="Issue ">Skip to main content not present</a></li>
            <li><a href="" aria-label="Issue ">Ensures role attribute has an appropriate value for the element</a></li>
        </ul>

        <h2>Mobile Issues</h2>
        <ul>
            <li><a href="" aria-label="Issue 8">Link not highlighted and even reading on mobile web view</a></li>
            <li><a href="" aria-label="Issue 9">Missing Mobile Keyboard Usability Enhancements for Input types</a></li>
        </ul>
    </div>
    </>
  );
}

export default Defects;
