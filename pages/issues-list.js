import { useEffect, useRef } from 'react'
import IssueList from "../components/issuesList"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

const GraphWrapper = () => {
  const mainPageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      mainPageRef.current.focus();
    }, 1000);
  });
  
  return (
    <Layout>
      <PageTitle title = "Common Assessibility Issues" />
      <div className="inner-container" aria-label= "page-heading" ref={mainPageRef}>
       <IssueList />
      </div>
    </Layout>
  );
};

export default GraphWrapper;
