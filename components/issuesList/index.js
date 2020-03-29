import React from 'react';
import BannerImg from '../../static/media/banner1.jpg';
import fixture1 from '../../static/media/d-f-1.png';
import fixture2 from '../../static/media/d-f-2.png';
import fixture4 from '../../static/media/d-f-4.png';
import fixture6 from '../../static/media/d-f-6.png';
import fixture7 from '../../static/media/d-f-5.png';
import fixture8 from '../../static/media/d-f-8.png';
import fixture9 from '../../static/media/d-f-9.png';
import fixture5 from '../../static/media/d-f-5.png';
import fixture10 from '../../static/media/d-f-10.png';
import fixture11 from '../../static/media/d-f-11.png';

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
            <li><a href={fixture6} aria-label="issue 6" target="new">Screen readers are not able to programmatically determine information about
            input objects in form</a></li>
            <li><a href={fixture7} aria-label="issue 7" target="new">Keyboard navigation failing when focus moves to an element within a
            scrollable region</a></li>
            <li><a href={fixture8} aria-label="issue 8" target="new">User is unable to get a "glimpse" of the page's layout and structure,
            using headings user can use keyboard shortcuts to navigate through the heading structure of a document</a></li>
            <li><a href={fixture9} aria-label="issue 9" target="new">Page is not having correct sematic markups</a></li>
        </ol>

        <h2>Mobile Issues</h2>
        <ol>
            <li><a href={fixture10} aria-label="Issue 10" target="new">Element not highlighted and even not read on mobile web view via Talkback</a></li>
            <li><a href={fixture11} aria-label="Issue 11" target="new">Missing Mobile Keyboard Usability Enhancements for Input Types</a></li>
        </ol>
    </div>
    </>
  );
}

export default Defects;
