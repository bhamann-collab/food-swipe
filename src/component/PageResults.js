import React from 'react'
import { useLocation } from 'react-router-dom'

const PageResults = (props) => {
    const location = useLocation()

    return (
        <div>
            <h1>Results are here</h1>
            <h1>{location.state.myData[0].meta}</h1>
            <h1>{location.state.myData[1].meta}</h1>
            <h1>{location.state.myData[2].meta}</h1>
            <h1>{location.state.myData[3].meta}</h1>
            <h1>{location.state.myData[4].meta}</h1>
            <h1>{location.state.myData[5].meta}</h1>
        </div>
    )
}

export default PageResults
