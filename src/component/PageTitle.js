import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'
import { Link } from 'react-router-dom'
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

const PageTitle = () => {
    return (
        <div className="titlePage">
            <h1>Food Tinder</h1>
            <FontAwesomeIcon
            className="titleFontAwesome pizzaSlice" 
            icon={"pizza-slice"} 
            style={{color: "white"}}
            />
            <div className="titleButtons">
                <Link to="/pageSwipe">
                    <FontAwesomeIcon
                    className="titleFontAwesome" 
                    icon={"user"} 
                    style={{color: "#c0392b"}}
                    />
                    <p>SOLO SWIPE</p>
                </Link>
                <Link to="/toBeReplaced">
                    <FontAwesomeIcon 
                    className="titleFontAwesome" 
                    icon={"users"} 
                    style={{color: "#c0392b"}}
                    />
                    <p>MULTI SWIPE</p>
                </Link>
            </div>
            <PrivacyPolicy />
        </div>
    )
}

export default PageTitle
