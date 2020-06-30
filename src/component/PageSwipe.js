import React, {useState, useEffect, useRef} from 'react';
import Timer from './Timer'
import SwiperCard from './SwiperCard'
import LoadingSpinnerComponent from "./LoadingSpinnerComponent"
import { trackPromise } from 'react-promise-tracker'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const API_ENDPOINT = process.env.REACT_APP_ENDPOINT || 'http://localhost:5000'
console.log(API_ENDPOINT)

function PageSwipe() {
	const [names, setNames] = useState([])

	//Getting names of restaurants internally
	const namesRef = useRef([])

	  //useRef
	  const cardSwiped = useRef(false);
	  const swipeLeft = useRef(false);

	  //React Router
	  let history = useHistory();

	//Starting out with the app wanting to know your location
  	useEffect(() => {
    	myLocation();
  	},[])


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
				  //Tracking promise spinner
				  trackPromise(
					axios
					.post(`${API_ENDPOINT}/api/geolocation`, coord)
					.then(
					  (mongoId) => {
						getRestaurants(mongoId.data)
					  })
					.catch(err => {
						console.log(err)
					})
				  )

        	})
      	} else {
        	console.log('geolocation not avaliable')
      	}
    	//Geolocation ends Here -------------------
    }
	function getRestaurants(mongoId) {
		console.log(`Mongo ID is this:${mongoId}`)
		//Tracking promise spinner
		trackPromise(
			axios
			.post(`${API_ENDPOINT}/api/restaurantData/${mongoId}`)
			.then(({data}) => {
				//Cutting out some objects
				let sliceData = (({ __v, _id, ...o}) => o)(data)
				namesRef.current = sliceData
				  setNames(sliceData)
			})
			.catch(err => {
				console.log(err)
			})
		)

	}

	//Swipe data logic -------------------------
	let rateRestaurant = [];
	let timepassed = 0;
	
	//Timer props
	function propTimer(time) {
		console.log(cardSwiped.current)
		timepassed++;
		if(cardSwiped.current === true && swipeLeft.current === true) {
			rateRestaurant.push(-(1/timepassed))
			timepassed = 0;
		} else if(cardSwiped.current === true && swipeLeft.current === false) {
			rateRestaurant.push(1/timepassed)
			timepassed = 0;
		}
		cardSwiped.current = false;
		console.log(rateRestaurant)
	}

	function propSwiped(isLeft) {
		if(isLeft === false) {
			swipeLeft.current = false
		} else {
			swipeLeft.current = true
		}
		cardSwiped.current = true;
	}
	//Swipe data logic -------------------------
	
	function transitionToResults() {
		console.log("We are going to transition to the results page")
		let data = Object.keys(namesRef.current).map((keyName, i) => namesRef.current[keyName].name)
		axios
		.post(`${API_ENDPOINT}/api/resultsData/`, {rateRestaurant, data})
		.then(({data}) => {
			//Cutting out some objects
		console.log("Results data")
		console.log(data)
		history.push({
			pathname: '/pageResults',
			state: { myData: data}
			})
		})
		.catch(err => {
			console.log(err)
		})
	}

    return (
        <div className="App">
			<Timer 
			propTimer={propTimer}
			transitionToResults={transitionToResults}
			/>
			<LoadingSpinnerComponent />
            <div className="swipeArea">
				{Object.keys(names).map((keyName,i) =>
					<SwiperCard 
					key={i} 
					cardName={names[keyName].name}
					cardPhoto={names[keyName].photo}
					propSwiped={propSwiped}
					/>
				)}
            </div>
        </div>
    );
}

export default PageSwipe;