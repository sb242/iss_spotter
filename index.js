const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});

// const { fetchMyIp, fetchCoordsByIp, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIp((error, ip) => {
//   if(error) {
//     console.log("Error: ", error);
//     return;
//   }
//     console.log(`Your ip address is: ${ip}`);
// })

// const ip = '24.66.105232.72';

// fetchCoordsByIp(ip, (error, coordiantes) => {
//   if(error) {
//     console.log("Error: ", error);
//     return;
//   }
//   console.log(`Your coordinates are:\nlongitude: ${coordiantes.longitude}, latitude: ${coordiantes.latitude}`);
// })

// const coordiantes = { latitude: '51.0857', longitude: '-114.0234' };

// fetchISSFlyOverTimes(coordiantes, (error, times) => {
//   if (error) {
//     console.log("Error: ", error);
//     return;
//   }
//   console.log(times);
// });