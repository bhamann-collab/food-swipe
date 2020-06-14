const { resolve } = require('path');

function getRestaurantsData(api_key) {
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
                console.log(JSON.parse(data).results.length)
                for(var i in JSON.parse(data).results) {
                    restaurantData[i] = JSON.parse(data).results[i].name
                    //console.log(JSON.parse(data).results[i].name);
                } 
                resolve(restaurantData)
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

    })

}




// const https = require('https')

// async function getRestaurantsData(api_key) {

//     https.get(api_key, async (resp) => {
//         let data = '';
//         let restaurantData = {}

//         // A chunk of data has been recieved.
//         resp.on('data', (chunk) => {
//             data += chunk;
//         });

//         // The whole response has been received. Print out the result.
//         resp.on('end', async () => {
//             console.log(JSON.parse(data).results.length)
//             for(var i in JSON.parse(data).results) {
//                 restaurantData[i] = JSON.parse(data).results[i].name
//                 //console.log(JSON.parse(data).results[i].name);
//             } 
//             console.log(restaurantData)
//         });
//     }).on("error", (err) => {
//         console.log("Error: " + err.message);
//     });
// }


module.exports = getRestaurantsData