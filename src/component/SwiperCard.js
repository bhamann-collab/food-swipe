import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import exampleRestaurant from '../img/example-api-img.jpg'
import Button from './Button'
import ImgContainer from './ImgContainer'
import axios from 'axios'

const API_ENDPOINT = process.env.REACT_APP_ENDPOINT || 'http://localhost:5000'

const SwiperCard = props => {

	const [propValue] = useState(props)

	const [photo, setPhoto] = useState(
		(propValue.cardPhoto[0].photo_reference === undefined || propValue.cardPhoto === null) ? exampleRestaurant : `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAwnIoZVOP8UHjprwWXf7qPilbtHM_pYj9JMOadlA6KBhrbRxAOLGstLErzBw6pEoaBplV0sSjqP8mpbbxI8jg1HZafX-lo53gBxNwARGg-RFxyAf5NU8H0Ba1Q69CpbFuEhBuaLfIMpgHmNIeTovwPz3DGhQ0J2fTXvHQKUovKUc6qloIhlqiqw&key=AIzaSyBZifzKH1or9Yf1IiwsnJYNkDmD6V3bkDY`
		)
	
	// useEffect(() => {
	// 	getPhotos();
	// }, [])

	

  	const onSwipe = (direction) => {
    	console.log('You swiped: ' + direction)
  	}
    
  	const onCardLeftScreen = (myIdentifier) => {
    	console.log(myIdentifier + ' left the screen')
	}

	//Getting Restaurant photo from server
	function getPhotos() {
		if(propValue.cardPhoto[0].photo_reference === undefined || propValue.cardPhoto === null) {
			//Photo equals generic card
			
		} else {
			//Using axios to get a photo
			axios
			.post(`${API_ENDPOINT}/api/getPhoto/${propValue.cardPhoto[0].photo_reference}`)
			.then(({data}) => {
				//Cutting out some objects
				console.log(data)
				setPhoto(data)
			})
			.catch(err => {
				console.log(err)
			})
			setPhoto(propValue.cardPhoto[0].photo_reference)
		}
	};

  	return (
			//Swipable card properties
			<TinderCard 
			className="singleCard" 
			onSwipe={(onSwipe)} 
			onCardLeftScreen={() => onCardLeftScreen(propValue.cardName)} 
			preventSwipe={['up', 'down']}>
			
			{/* Image Placement */}
			<ImgContainer imgSrc={photo}/>

			{/* Button declaration */}
			<div className="button-container">
				<Button colorValue={`red`} iconValue={`times`}/>
				<Button colorValue={`green`} iconValue={`check`}/>
			</div>

			{/* Restaurant Information */}
			<div className="container">
				<p>{propValue.cardName}</p>
				<p>$$</p>
				<p>200m away</p>
			</div>

		</TinderCard>
  	)
}

export default SwiperCard
