const { resolve } = require('path');
getDistanceFromLatLon = require('./getDistanceFromLatLon')

function getRestaurantsData(api_key, lat, lng) {
    console.log(lat, lng)
    var https = require('https');
    let restaurantData = {}

    return new Promise((resolve,reject)=>{
        //your logic and data manipulations here and finally resolve the variable
        
        https.get(api_key, async (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', async () => {
                console.log(data)
                for(var i in JSON.parse(data).results) {
                    distance = getDistanceFromLatLon(lat,lng,JSON.parse(data).results[i].geometry.location.lat,JSON.parse(data).results[i].geometry.location.lng)
                    restaurantData[i] = {
                        name: JSON.parse(data).results[i].name,
                        location: JSON.parse(data).results[i].geometry.location,
                        photo: JSON.parse(data).results[i].photos,
                        distance: round(distance, 20, 10)
                    }
                } 
                resolve(restaurantData)
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

    })

}

function round(number, increment, offset) {
    return Math.ceil((number - offset) / increment ) * increment + offset;
}

module.exports = getRestaurantsData