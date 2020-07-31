const express = require('express');
const router = express.Router();
const Restaurants = require('../models/restaurantPlaces')

 getRestaurantsData = require('./route_functions/getRestaurantsData')
 shuffleObjects = require('./route_functions/shuffleObjects')
 getDistanceFromLatLon = require('./route_functions/getDistanceFromLatLon')

//Client sends their geolocation to the server and the server populates the database with restaurant information ready for a session
router.post('/api/geolocation', async (req, res) => {
    console.log(req.body)
    const api_key = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?rankby=distance&location=${req.body.latitude}%2C${req.body.longitude}&key=${process.env.API_KEY}&type=restaurant`
    //Google API call to get restaurant data
    let restaurantNames = await getRestaurantsData(api_key, req.body.latitude, req.body.longitude)
    console.log(restaurantNames[0])
    //console.log(getDistanceFromLatLon(req.body.latitude, req.body.longitude, restaurantNames[0].location.lat, restaurantNames[0].location.lng))

    //Randomizing the restaurants
    let shuffle = shuffleObjects(restaurantNames)

    //Placing restaurant data for user as a document in the MongoDB collection
    var restaurants = new Restaurants(shuffle)
    let sessionId = await restaurants.save().then((item) => {
        return item.id  
    })
    res.send(JSON.stringify(sessionId))
})

//A get request does not seem to work in Heroku production, so we will try a post request
router.post('/api/restaurantData/:id', (req, res) => {
    Restaurants.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            console.log(result)
            res.send(JSON.stringify(result));
        }
    })
})

//Heroku testing
router.get('/api/test', (req, res) => {
    console.log("The test works")
    res.end()
})

router.get('/api/test/id/:id', (req, res) => {
    console.log(`id is: ${req.params.id}`)
    res.end()
})

router.post('/api/test', (req, res) => {
    console.log("The test works")
    res.end()
})

router.post('/api/test/id/:id', (req, res) => {
    console.log(`id is: ${req.params.id}`)
    res.end()
})

router.put('/api/test', (req, res) => {
    console.log("The test works")
    res.end()
})

router.put('/api/test/id/:id', (req, res) => {
    console.log(`id is: ${req.params.id}`)
    res.end()
})
//Heroku testing

module.exports = router;