const express = require('express');
const router = express.Router();
const Restaurants = require('../models/restaurantPlaces')

rankRestaurants = require('./route_functions/rankRestaurants')

router.post('/api/resultsData', (req, res) => {
    let {rateRestaurant, data} = req.body
    data = data.reverse();
    let results = rankRestaurants(data, rateRestaurant)
    console.log('sending results back now')
    res.send(JSON.stringify(results))
})

module.exports = router;