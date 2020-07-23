import React from 'react'
import Nickname from './Nickname'
import HostRoom from './HostRoom'
import JoinRoom from './JoinRoom'
import './Rooms.scss'

const Rooms = () => {
    return (
        <div className="Rooms">
            <Nickname />
            <HostRoom />
            <JoinRoom /> 
        </div>
    )
}

export default Rooms
