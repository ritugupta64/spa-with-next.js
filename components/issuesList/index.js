import React from 'react';
import BannerImg from '../../static/media/banner1.jpg';
import fixture1 from '../../static/media/d-f-1.png';
import fixture2 from '../../static/media/d-f-2.png';
import fixture4 from '../../static/media/d-f-4.png';
import fixture5 from '../../static/media/d-f-5.png';
import fixture6 from '../../static/media/d-f-5.png';
import fixture7 from '../../static/media/d-f-5.png';
import fixture8 from '../../static/media/d-f-5.png';
import fixture9 from '../../static/media/d-f-5.png';

import '../../styles/style.css';

function Defects() {
  return (
    <>
    <div className="IssueList">
        <h1>Dekstop Web Issues</h1>
        <ol>
            <li><a href={fixture1} aria-label="issue 1" target="new">Unexpected tab order due to which some 
            elements are skipped
            entirely</a></li>
            <li><a href={fixture2} aria-label="issue 2" target="new">Screen Reader is communicating incorrect 
            role of the element on 
            the page to the user</a></li>
            <li><a href="#" aria-label="issue 3">For people with low vision everything tends to appear about 
            the same brightness, which makes them hard to distinguish outlines, borders, edges, and details</a></li>
            <li><a href={fixture4} aria-label="issue 4" target="new">Navigating through pages quickly is difficult and confusing for 
            screen reader as title is not descriptive and unique</a></li>
            <li><a href={fixture5} aria-label="issue 5" target="new">Screen reader is not specifying the purpose of images 
            on page properly</a></li>
            <li><a href={fixture6} aria-label="issue 6">Screen readers are not able to programmatically determine information about 
            input objects in form</a></li>
            <li><a href="" aria-label="Issue ">Ensure that scrollable region has keyboard access</a></li>
            <li><a href="" aria-label="Issue ">Skip to main content not present</a></li>
            <li><a href="" aria-label="Issue ">Ensures role attribute has an appropriate value for the element</a></li>
        </ol>

        <h2>Mobile Issues</h2>
        <ol>
            <li><a href="" aria-label="Issue 8">Link not highlighted and even reading on mobile web view</a></li>
            <li><a href="" aria-label="Issue 9">Missing Mobile Keyboard Usability Enhancements for Input types</a></li>
        </ol>
    </div>
    </>
  );
}

export default Defects;
