import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_accessibility from '../../node_modules/highcharts/modules/accessibility';


const config = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Credit Score Trend over the months'
    },
    subtitle: {
        text: 'Powered by VantageScore'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        },
        accessibility: {
          description: 'Time over the months'
        },
    },
    yAxis: {
        min: 300,
        max: 800,
        title: {
            text: 'Credit Score'
        },
        accessibility: {
          description: 'Range to credit score from 300 to 800'
        },
    },
    legend: {
        enabled: false
    },
    tooltip : {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e-%b}: {point.y}'
     },
    series: [{
        name: 'Credit Score',
        data: [
            [Date.UTC(2020,  2,  4), 670],
            [Date.UTC(2020,  2,  7), 580],
            [Date.UTC(2020,  2, 11), 550],
            [Date.UTC(2020,  2, 13), 700],
            [Date.UTC(2020,  2, 17), 600],
            [Date.UTC(2020,  2, 20), 780],
            [Date.UTC(2020,  2, 24), 534],
            [Date.UTC(2020,  2, 28), 470],
            [Date.UTC(2020,  2, 31), 340]
         ],
         accessibility: {
          description: 'This bar show the trend of a single user'
        }

    }]
};
HC_accessibility(Highcharts);

const Graph = () => (
    <div className="App">
      <div id="wrapper">
          <h2>Credit score Graph</h2>
          <svg height="40px" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100 100 L 300 100 L 200 300 z" fill="LightBlue" stroke="Blue" stroke-width="1" />
          </svg>
          <svg id="meter" aria-labelledby="title" aria-describedby="desc" role="img">
            <title id="title">Depicts the Credit Score Guage Meter for you</title>
            <desc id="desc">Semi Circle with Yellow, blue , red and green color</desc>
            <circle id="outline_curves" r="150" cx="50%" cy="50%" stroke="#f6f6f6" stroke-width="65" stroke-dasharray="471, 943" fill="none"></circle>
            <circle id="low" r="150" cx="50%" cy="50%" stroke="#FDE47F" stroke-width="60" stroke-dasharray="471, 943" fill="none"></circle>
            <circle id="avg" r="150" cx="50%" cy="50%" stroke="#7CCCE5" stroke-width="60" stroke-dasharray="300, 943" fill="none"></circle>
            <circle id="high1" r="150" cx="50%" cy="50%" stroke="#E04644" stroke-width="60" stroke-dasharray="137, 943" fill="none"></circle>
            <circle id="high2" r="150" cx="50%" cy="50%" stroke="#00FF00" stroke-width="60" stroke-dasharray="34, 943" fill="none"></circle>
            <text x="160" y="200" fill="black" transform="scale(1,-1) translate(510,-430)" aria-labelledby="content">Your Score Is 550</text>
          </svg>
          <div id="content">Your Score is 550 currently</div>
      </div>
      <hr/>
      <div><HighchartsReact options = {config}/></div>
      <p><i>This chart shows your credit score figures during the last 1 year (2020). The number indicate that credit score increases dramatically in every 4th quarter, remain high in the 1st quarter, then decline rapidly in the 2nd and 3rd quarters. </i></p>
    </div>
);

export default Graph;
