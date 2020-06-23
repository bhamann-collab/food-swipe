const express = require('express');
const router = express.Router();

router.post('/api/getPhoto/:id', (req, res) => {
    const api_key = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${req.params.id}&key=${process.env.API_KEY}`
    console.log(api_key)


    res.end()
})

module.exports = router;