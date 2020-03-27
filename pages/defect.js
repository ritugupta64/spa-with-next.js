import { useEffect, useRef } from 'react'
import Defects from "../components/defects"

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
      <PageTitle title = "Defects" />
      <div className="inner-container" aria-label = "page-heading" ref={mainPageRef}
        tabIndex="-1">
       <Defects />
      </div>
    </Layout>
  );
};

export default GraphWrapper;
