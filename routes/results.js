const express = require('express');
const router = express.Router();
const Restaurants = require('../models/restaurantPlaces')

rankRestaurants = require('./route_functions/rankRestaurants')

router.post('/api/resultsData', (req, res) => {
    let {rateRestaurant, data} = req.body
    console.log(rateRestaurant)
    console.log(data)
})

module.exports = router;