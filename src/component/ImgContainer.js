import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

//Needed to import font awesome
const iconList = Object

  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

  library.add(...iconList)

  const API_ENDPOINT = process.env.REACT_APP_ENDPOINT || 'http://localhost:5000'

const ImgContainer = props => {

    //Setting the background and icon colors
    const [colors, setColors] = useState({})

    useEffect(() => {
    	colorInit();
  	},[])

      //getting a color pattern from the server before components being rendered
      function colorInit() {
        axios
        .post(`${API_ENDPOINT}/api/getPhotoColors`)
        .then(
          (results) => {
            setColors(results.data)
          })
        .catch(err => {
            console.log(err)
        })  
    }


    return (
        <div className="imgContainer" style={{backgroundColor: colors.background}}>
            <FontAwesomeIcon
            className="utensil"
            icon={"utensil-spoon"}
            style={{color: colors.icon}}
            />
        </div>
    )
}

export default ImgContainer
