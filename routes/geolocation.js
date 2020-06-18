const express = require('express');
const router = express.Router();
const Restaurants = require('../models/restaurantPlaces')

 getRestaurantsData = require('./route_functions/getRestaurantsData')

//Client sends their geolocation to the server and the server populates the database with restaurant information ready for a session
router.post('/api/geolocation', async (req, res) => {
    console.log(req.body)
    const api_key = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?rankby=distance&location=${req.body.latitude}%2C${req.body.longitude}&key=${process.env.API_KEY}&type=restaurant`
    //Google API call to get restaurant data
    let restaurantNames = await getRestaurantsData(api_key)

    var restaurants = new Restaurants(restaurantNames)
    let sessionId = await restaurants.save().then((item) => {
        console.log("FROM THE MONGO DATABASE")
        console.log(item)
        return item.id  
    })
    res.send(JSON.stringify(sessionId))
})

router.get('/api/restaurantData/:id', (req, res) => {
    console.log("GOING TO THE MONGO DATABASE")
    Restaurants.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            console.log("YAAAAAAAAA")
            console.log(result)
            console.log("YAAAAAAAAA")
            res.json(result);
        }
    })
    //res.send(JSON.stringify("hello"))
})

module.exports = router;