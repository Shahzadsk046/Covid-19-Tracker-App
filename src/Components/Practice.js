// import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// import './practice.css';

// // const useStyles = makeStyles((theme) => ({
// //     /* The Modal (background) */
// //     modal: {
// //         display: 'none', /* Hidden by default */
// //         position: 'fixed', /* Stay in place */
// //         zIndex: 1, /* Sit on top */
// //         left: 0,
// //         top: 0,
// //         width: '100%', /* Full width */
// //         height: '100%', /* Full height */
// //         overflow: 'auto', /* Enable scroll if needed */
// //         // backgroundColor: 'rgb(0,0,0)', /* Fallback color */
// //         backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
// //     },

// //     /* Modal Content/Box */
// //     modalContent: {
// //         backgroundColor: '#fefefe',
// //         margin: '15% auto', /* 15% from the top and centered */
// //         padding: '20px',
// //         border: '1px solid #888',
// //         width: '80%', /* Could be more or less, depending on screen size */
// //         position: 'relative',
// //         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
// //         animationName: 'from {top: -300px; opacity: 0} to {top: 0; opacity: 1}',
// //         animationDuration: '0.4s',
// //     },

// //     /* The Close Button */
// //     close: {
// //         color: '#aaa',
// //         float: 'right',
// //         fontSize: '28px',
// //         fontWeight: 'bold',
// //     },

// //     /* Modal Header */
// //     modalHeader: {
// //         padding: '2px 16px',
// //         backgroundColor: '#5cb85c',
// //         color: 'white',
// //     },

// //     /* Modal Body */
// //     modalBody: { padding: '2px 16px', },

// //     /* Modal Footer */
// //     modalFooter: {
// //         padding: '2px 16px',
// //         backgroundColor: '#5cb85c',
// //         color: 'white',
// //     },

// // }))

// const Practice = () => {
//     // const classes = useStyles()


//     // Get the modal
//     var modal = document.getElementById("myModal")

//     // Get the button that opens the modal
//     // var btn = document.getElementById("myBtn");

//     // Get the <span> element that closes the modal
//     // var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on the button, open the modal
//     // btn.onclick = function () {
//     //     modal.style.display = "block";
//     // }

//     // When the user clicks on <span> (x), close the modal
//     // span.onclick = function () {
//     //     modal.style.display = "none";
//     // }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function (event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     }

//     return (
//         <div>
//             <button id="myBtn" onClick={function () {
//                 modal.style.display = "block"
//             }}>Open Modal</button>

//             <div id="myModal" className="modal">
//                 <div className="modal-content">
//                     <div className='modal-header'>
//                         <span className='close' onClick={function () {
//                             modal.style.display = "none"
//                         }}>&times;</span>
//                         <h2>Modal Header</h2>
//                     </div>
//                     <div className="modal-body">
//                         <p>Some text in the Modal Body</p>
//                         <p>Some other text...</p>
//                     </div>
//                     <div className="modal-footer">
//                         <h3>Modal Footer</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Practice



// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// const options = {
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//         },
//       },
//     ],
//   },
// };

// const VerticalBar = () => (
//   <>
//     <div className='header'>
//       <h1 className='title'>Vertical Bar Chart</h1>
//       <div className='links'>
//         <a
//           className='btn btn-gh'
//           href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
//         >
//           Github Source
//         </a>
//       </div>
//     </div>
//     <Bar data={data} options={options} />
//   </>
// );

// export default VerticalBar;

// import React from 'react';
// import { Line } from 'react-chartjs-2';



// const data = {
//   labels: [`Covid-19 ${dailyData.Countries.Country} Stats`],
//   datasets: [
//     {
//       label: ['New Infected'],
//       data: [dailyData.Countries.NewConfirmed],
//       fill: true,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//       ],
//       borderWidth: 1,
//     },
//     {
//       label: ['Total Infected'],
//       data: [dailyData.Countries.TotalConfirmed],
//       fill: true,
//       backgroundColor: [
//         'rgba(54, 162, 235, 0.2)',
//       ],
//       borderColor: [
//         'rgba(54, 162, 235, 1)',
//       ],
//       borderWidth: 1,
//     },
    
//     {
//       label: ['New Recovered'],
//       data: [dailyData.Countries.NewRecovered],
//       fill: true,
//       backgroundColor: [
//         'rgba(255, 206, 86, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 206, 86, 1)',
//       ],
//       borderWidth: 1,
//     },
//     {
//       label: ['Total Recovered'],
//       data: [dailyData.Countries.TotalRecovered],
//       fill: true,
//       backgroundColor: [
//         'rgba(75, 192, 192, 0.2)',
//       ],
//       borderColor: [
//         'rgba(75, 192, 192, 1)',
//       ],
//       borderWidth: 1,
//     },
    
//     {
//       label: ['New Deaths'],
//       data: [dailyData.Countries.NewDeaths],
//       fill: true,
//       backgroundColor: [
//         'rgba(153, 102, 255, 0.2)',
//       ],
//       borderColor: [
//         'rgba(153, 102, 255, 1)',
//       ],
//       borderWidth: 1,
//     },
//     {
//       label: ['Total Deaths'],
//       data: [dailyData.Countries.TotalConfirmed],
//       fill: true,
//       backgroundColor: [
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// const options = {
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//         },
//       },
//     ],
//   },
// };

// const LineChart = () => (
//   <>
//     <div className='header'>
//       <h1 className='title'>Line Chart</h1>
//     </div>
//     <Line data={data} options={options} />
//   </>
// );

// export default LineChart;