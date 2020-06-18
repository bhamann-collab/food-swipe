import React, {useState, useEffect} from 'react';
import Timer from './Timer'
import SwiperCard from './SwiperCard'
import axios from 'axios'

const API_ENDPOINT = process.env.REACT_APP_ENDPOINT || 'http://localhost:5000'
console.log(API_ENDPOINT)

function PageSwipe() {
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
				.post(`${API_ENDPOINT}/api/geolocation`, coord)
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
		console.log(`Mongo ID is this:${mongoId}`)
        axios
        .post(`${API_ENDPOINT}/api/restaurantData/${mongoId}`)
        .then(({data}) => {
			//Cutting out some objects
			let sliceData = (({ __v, _id, ...o}) => o)(data)
          	setNames(sliceData)
		})
		.catch(err => {
			console.log(err)
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

export default PageSwipe;