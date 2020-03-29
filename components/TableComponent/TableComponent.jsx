import React from 'react';
import './TableComponent.css';

function TableComponent(){
    return(
        <>
        <h1>Table Component Best Pratices</h1>
        <ul>
          <li>One Header</li>
          <li>Two Headers</li>
          <li>Irregular Headers</li>
        </ul>
        <table class="table1" id="table1" border="1">
          <caption>Multiple Headers</caption>
          <thead>
            <tr role="row">
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col">Favorite Color</th>
              <th scope="col">Select</th>
            </tr>
            
          </thead>
          <tbody>
            <tr role="row">
              <th scope="row">Alice</th>
              <td>Egghead</td>
              {/* role="row" must have children of cells and role="cell" is cell within the row */}
              <td role="row">20</td>
              <td>blue</td>
              <td>
                <button id="select_1a" aria-label="Select Alice">Select</button>
              </td>
            </tr>
            <tr role="row">
              <th scope="row">Bob</th>
              <td>Smith</td>
              <td>43</td>
              <td>purple</td>
              <td>
                <button id="select_1b" aria-label="Select Bob">Select</button>
              </td>
            </tr>
            <tr role="row">
              <th scope="row">Charlie</th>
              <td>Jones</td>
              <td>23</td>
              <td>yellow</td>
              <td>
                <button id="select_1c" aria-label="Select Charlie">Select</button>
              </td>
            </tr>
            <tr role="row">
              <th scope="row">Denise</th>
              <td>Brown</td>
              <td>53</td>
              <td>green</td>
              <td>
                <button id="select_1d" aria-label="Select Denise">Select</button>
              </td>
            </tr>
            <tr role="row">
              <th scope="row">Eloise</th>
              <td>Humperdink</td>
              <td>83</td>
              <td>red</td>
              <td>
                <button id="select_1e" aria-label="Select Eloise">Select</button>
              </td>
            </tr>
          </tbody>
        </table>
        
        <table class="table2" id="table2" border="1">
          <caption>Irregular Headers</caption>
          <thead>
            <tr>
              <th scope="col">Poster name</th>
              <th scope="col">Color</th>
              <th colspan="3" scope="colgroup">Sizes available</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowspan="3" scope="rowgroup">Zodiac</th>
              <td>Full color</td>
              <td>A1</td>
              <td>A2</td>
              <td>A3</td>
            </tr>
            <tr>
              <td>Black and white</td>
              <td>S1</td>
              <td>S2</td>
              <td>S3</td>
            </tr>
            <tr>
              <td>Sepia</td>
              <td>M1</td>
              <td>M2</td>
              <td>M3</td>
            </tr>
          </tbody>
        </table>

        </>
    )
}

export default TableComponent;