import React from 'react'
import { useLocation } from 'react-router-dom'
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

const PageResults = (props) => {
    const location = useLocation()

    return (
        <div>
            <div className="firstPlaceArea">
                <h1>Congratulations!</h1>
                <h1 className="smallFontWeight">You are going to:</h1>
                <FontAwesomeIcon
                className="titleFontAwesome crown" 
                icon={"crown"} 
                style={{color: "white"}}
                />
                <div className="firstPlaceText">
                    <h1 className="placingName">{location.state.myData[0].meta}</h1>
                </div>
            </div>
            {/* <h1>{location.state.myData[0].meta}</h1>
            <h1>{location.state.myData[1].meta}</h1>
            <h1>{location.state.myData[2].meta}</h1>
            <h1>{location.state.myData[3].meta}</h1>
            <h1>{location.state.myData[4].meta}</h1>
            <h1>{location.state.myData[5].meta}</h1> */}
        </div>
    )
}

export default PageResults
