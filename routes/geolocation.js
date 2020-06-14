const express = require('express');
const router = express.Router();

 getRestaurantsData = require('./route_functions/getRestaurantsData')

router.post('/api/geolocation', async (req, res) => {
    console.log(req.body)
    const api_key = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?rankby=distance&location=${req.body.latitude}%2C${req.body.longitude}&key=${process.env.API_KEY}&type=restaurant`
    let restaurantNames = await getRestaurantsData(api_key)
    console.log(restaurantNames)
})

module.exports = router;