import React, {useState, useEffect} from 'react';
import './css/App.scss';
import Timer from './component/Timer'
import SwiperCard from './component/SwiperCard'
import photoDb from './db/photoDB'
import axios from 'axios'


function App() {
  	const [names, setNames] = useState([])

	//Starting out with the app wanting to know your location
  	useEffect(() => {
    	myLocation();
  	}, [])


    //Geolocation Starts Here -------------------
    function myLocation() {
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
    	//Geolocation ends Here -------------------
    }
	function getRestaurants(mongoId) {
        axios
        .get(`http://localhost:5000/api/restaurantData/${mongoId}`)
        .then(({data}) => {
          	setNames(data)
        })
    }

    console.log(names)
    return (
        <div className="App">
            <Timer />
            <div className="swipeArea">
				{Object.keys(names).map((keyName,i) =>
					<SwiperCard key={i} cardName={names[keyName].name}/>
				)}
            </div>
        </div>
    );
}

export default App;
