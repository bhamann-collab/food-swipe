const express = require('express');
const router = express.Router();

router.post('/api/geolocation', (req, res) => {
    console.log(req.body)
})

module.exports = router;