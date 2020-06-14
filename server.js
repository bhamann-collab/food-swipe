const {createServer} = require('http')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const https = require('https')
const { parse } = require('path')
require('dotenv').config();

console.log(process.env)

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000)

const app = express()
const dev = app.get('env') !== 'production'

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

if (dev) {
    app.use(morgan('dev'))
}

const server = createServer(app)

server.listen(PORT, err => {
    if (err) throw err
    console.log(`server started ${PORT}`);
});

const api_key = process.env.API_KEY

function getRestaurantsData() {
    https.get(api_key, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
        console.log(JSON.parse(data).results.length)
        for(var i in JSON.parse(data).results) {
            console.log(JSON.parse(data).results[i].name);
        }
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});    
}

getRestaurantsData();