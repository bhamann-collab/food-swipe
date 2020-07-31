import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import Button from './Button'
import ImgContainer from './ImgContainer'

const SwiperCard = props => {

	const [propValue] = useState(props)

	

  	const onSwipe = (direction) => {
		console.log('You swiped: ' + direction)
		let isLeft = (direction === "left") ? true : false;
		let isDownOrUp = (direction === "down" || direction === "up") ? true : false;
		props.propSwiped(isLeft, isDownOrUp)
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
			<ImgContainer/>

			{/* Button declaration */}
			<div className="button-container">
				<Button colorValue={`red`} iconValue={`times`}/>
				<Button colorValue={`green`} iconValue={`check`}/>
			</div>

			{/* Restaurant Information */}
			<div className="container">
				<p>{propValue.cardName}</p>
				{/* <p>$$</p> */}
				<p>{propValue.cardDistance}m away</p>
			</div>

		</TinderCard>
  	)
}

export default SwiperCard
