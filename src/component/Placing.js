import React from 'react'

const Placing = (props) => {
    return (
        <div className="Placing">
            <div className="rankingPlace">
                <div className="placeNumber">
                    <p>#{props.number}</p>
                </div>
                <div className="placeRestaurant">
                    <p>{props.restaurant}</p>
                </div>
            </div>
        </div>
    )
}

export default Placing
