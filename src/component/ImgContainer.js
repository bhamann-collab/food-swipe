import React, {useState} from 'react'

const ImgContainer = props => {

    const [propValue] = useState(props)
    return (
        <div className="imgContainer">
            <img className="imgRestaurant" src={propValue.imgSrc} alt="Example Restaurant"/>
        </div>
    )
}

export default ImgContainer
