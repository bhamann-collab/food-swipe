import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import exampleRestaurant from '../img/example-api-img.jpg'
import Button from './Button'
import ImgContainer from './ImgContainer'

const SwiperCard = props => {

	const [propValue] = useState(props)

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
			<ImgContainer imgSrc={exampleRestaurant}/>

			{/* Button declaration */}
			<div className="button-container">
				<Button colorValue={`red`} iconValue={`times`}/>
				<Button colorValue={`green`} iconValue={`check`}/>
			</div>

			{/* Restaurant Information */}
			<div className="container">
				<p>Ruby Red Flamingo</p>
				<p>$$</p>
				<p>200m away</p>
			</div>

		</TinderCard>
  	)
}

export default SwiperCard
