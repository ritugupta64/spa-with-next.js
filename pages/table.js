import { useEffect, useRef } from 'react'

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

import TableComponent from '../components/TableComponent/TableComponent';
import TableComponentDiv from '../components/TableComponentDiv/TableComponentDiv';

const GraphWrapper = () => {
  const mainPageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      mainPageRef.current.focus();
    }, 1000);
  });
  
  return (
    <Layout>
      <PageTitle title = "Table" />
      <div className="inner-container" aria-labelledby = "page-heading" ref={mainPageRef}
        tabIndex="-1">
        <h1 id="page-heading">
          Table
        </h1>
       <TableComponent />
       <TableComponentDiv />
      </div>
    </Layout>
  );
};

export default GraphWrapper;
