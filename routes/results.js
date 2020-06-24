const express = require('express');
const router = express.Router();
const Restaurants = require('../models/restaurantPlaces')

router.post('/api/resultsData', (req, res) => {
    let {rateRestaurant, data} = req.body
    console.log(rateRestaurant)
    console.log(data)
})

module.exports = router;