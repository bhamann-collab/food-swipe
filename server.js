const {createServer} = require('http')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const cors = require("cors")
const { parse } = require('path')
require('dotenv').config();

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000)

const app = express()
const dev = app.get('env') !== 'production'

//Mongoose
//-----------------------------------
mongoose.connect( `${process.env.MONGODB_URI}/food` || 'mongodb://localhost:27017/food', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
//-----------------------------------


//If we are not in dev (if we are in production)
if (!dev) {
    //Removing x-powered-by because of security vulnerability
    app.disable('x-powered-by')
    app.use(compression())
    //Common flag logs certain stuff
    app.use(morgan('common'))

    //We are telling where our static files belong (./build)
    app.use(express.static(path.resolve(__dirname, 'build')))

    //On every request that comes in, because we don't have a built in API at the moment, we use a boiler plate to send ./public/index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())



//Using routes
app.use(require("./routes/geolocation"))

if (dev) {
    app.use(morgan('dev'))
}

const server = createServer(app)

server.listen(PORT, err => {
    if (err) throw err
    console.log(`server started ${PORT}`);
});



