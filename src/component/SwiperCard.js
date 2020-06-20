import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import exampleRestaurant from '../img/example-api-img.jpg'
import Button from './Button'
import ImgContainer from './ImgContainer'

const SwiperCard = props => {

	const [propValue] = useState(props)
	let placePhoto = propValue.cardPhoto[0].photo_reference

	const browserKey = `AIzaSyBZifzKH1or9Yf1IiwsnJYNkDmD6V3bkDY`
	const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${placePhoto}&key=${browserKey}`

	//photo variable can either be a google photo API attempt or a generic photo if place has no photo
	const [photo] = useState(
		(placePhoto === undefined || placePhoto === null) ? exampleRestaurant : url
		)
	

  	const onSwipe = (direction) => {
    	console.log('You swiped: ' + direction)
  	}
    
  	const onCardLeftScreen = (myIdentifier) => {
    	console.log(myIdentifier + ' left the screen')
	}

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
