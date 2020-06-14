import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";

//Needed to import font awesome
const iconList = Object

  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

  library.add(...iconList)
//Needed to import font awesome

const Button = props => {
    //Currently uses props the color of the icon and the type of icon
    //propValue.iconValue and propValue.colorValue will now exist
    const [propValue] = useState(props)

    return (
        <div className="button">
            <FontAwesomeIcon 
            className="buttonIcon"
            icon={propValue.iconValue} 
            style={{color: propValue.colorValue}}
            />
        </div>
    )
}

export default Button
