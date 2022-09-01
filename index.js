const { fetchMyIp } = require("./iss");

fetchMyIp((error, ip) => {
  if(error) {
    console.log("Error: ", error);
    return;
  }
    console.log(`Your ip address is: ${ip}`);
})