import React from 'react';
import './css/App.scss';
//test line below
import APITest from './component/APITest'
import Timer from './component/Timer'
import SwiperCard from './component/SwiperCard'
import photoDb from './db/photoDB'
import axios from 'axios'

//Geolocation
if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      const coord = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
      }
      axios
        .post('http://localhost:5000/api/geolocation', coord)
        .then(
          (mongoId) => {
            getRestaurants(mongoId.data)
          })
        .catch(err => {
            console.log(err)
        })
    })
  } else {
    console.log('geolocation not avaliable')
  }
  //Geolocation

  function getRestaurants(mongoId) {
    axios
    .get(`http://localhost:5000/api/restaurantData/${mongoId}`)
    .then((data) => console.log(data))
  }

function App() {
    return (
        <div className="App">
            <Timer />
            <div className="swipeArea">
				{photoDb.map((card) =>
					<SwiperCard key={card.name} cardName={card.name}/>
				)}
            </div>
        </div>
    );
}

export default App;
