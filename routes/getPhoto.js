const express = require('express');
const router = express.Router();

getColors = require('./route_functions/getColors')

router.post('/api/getPhotoColors', (req, res) => {
    res.send(JSON.stringify(getColors()))
})

module.exports = router;