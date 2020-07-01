import React, { useState } from 'react'
import PrivacyPolicy from './PrivacyPolicy'
import ModalTitle from './ModalTitle'
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
console.log(iconList)

const PageTitle = () => {
    const[checked, setChecked] = useState(false)
    const[show, setShow] = useState(false)

    const handleClick = () => {
        setChecked(!checked)
    }  

    const modalClick = () => {
        setShow(!show)
    }

    const boxUnticked = () => {
        console.log("box is unticked")
    }

    return (
        <div className="titlePage">
            <ModalTitle show={show} modalClick={modalClick}/>
            <button onClick={modalClick}>test button</button>
            <h1>Food Swiper</h1>
            <FontAwesomeIcon
            className="titleFontAwesome pizzaSlice" 
            icon={"pizza-slice"} 
            style={{color: "white"}}
            />
            <p className="intro">Swipe restaurants you're interested in and we'll make up your mind on where you'll eat today.</p>
            <div className="titleButtons">
                <Link 
                to={checked ? "/pageSwipe" : "/"}
                onClick={!checked ? boxUnticked : null}
                >
                    <FontAwesomeIcon
                    className="titleFontAwesome" 
                    icon={"user"} 
                    style={{color: "#c0392b"}}
                    />
                    <p>SOLO SWIPE</p>
                </Link>
                <Link 
                to={checked ? "/toBeReplaced" : "/"}
                onClick={!checked ? boxUnticked : null}
                >
                    <FontAwesomeIcon 
                    className="titleFontAwesome" 
                    icon={"users"} 
                    style={{color: "#c0392b"}}
                    />
                    <p>MULTI SWIPE</p>
                </Link>
            </div>
            <PrivacyPolicy 
            onClick={handleClick}
            checked={checked}
            />
        </div>
    )
}

export default PageTitle
