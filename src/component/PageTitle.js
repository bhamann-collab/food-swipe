import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = () => {
    return (
        <div className="titlePage">
            <h1>This is a temporary page</h1>
            <Link to="/pageSwipe">
                <button>Press to Swipe</button>
            </Link>
        </div>
    )
}

export default PageTitle
