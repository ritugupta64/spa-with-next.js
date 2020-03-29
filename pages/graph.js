import { useEffect, useRef } from 'react'
import Graph from "../components/graph"

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
      <PageTitle title = "Graph and charts" />
      <div className="inner-container" aria-labelledby = "page-heading" ref={mainPageRef}
        tabIndex="-1">
        <h1 id="page-heading">
          SVG and Graph
        </h1>
       <Graph />
      </div>
    </Layout>
  );
};

export default GraphWrapper;
