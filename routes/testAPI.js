const express = require('express');
const router = express.Router();
const https = require('https')


const api_key = process.env.API_KEY

function getRestaurantsData() {
    https.get(api_key, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
        console.log(JSON.parse(data).results.length)
        for(var i in JSON.parse(data).results) {
            console.log(JSON.parse(data).results[i].name);
        }
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});    
}

getRestaurantsData();

module.exports = router