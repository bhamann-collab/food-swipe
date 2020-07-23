import React from 'react'
import ToggleOnOff from './ToggleOnOff'

const HostRoom = () => {

    return (
        <div className="HostRoom">
            <div className="toggling">
                <p>Host Room</p>
                <ToggleOnOff />
            </div>
            <p className="roomNumber">Room Number: A5B26</p>
            <div className="participantContainer">
                <p className="underline">Participants</p>
            </div>
            <button>Start Swiping</button>
        </div>
    )
}

export default HostRoom
