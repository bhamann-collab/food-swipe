import React, { useContext, useEffect } from 'react';
import ToggleOnOff from './ToggleOnOff';
import Participants from './Participants'
import { HostContext, RoomNameContext } from './Rooms';
import { UnmountClosed } from 'react-collapse';
import { useHistory } from 'react-router-dom'
import { socket } from '../../App'

const HostRoom = () => {
    //If the isHost flag is true, then we can use the functionality of this component
    const hostContext = useContext(HostContext)
    //Showing the new generated room number
    const roomNameContext = useContext(RoomNameContext)

    //React Router
    let history = useHistory();

    useEffect(() => {
        socket.on('start swipe', () => {
            history.push({
                pathname: '/pageSwipe'
            })
        })
    }, [])

    const handleButton = e => {
        socket.emit('prepare to start', roomNameContext.roomNameState)
    }
    return (
        <div className="HostRoom">
            <div className="toggling">
                <p>Host Room</p>
                <ToggleOnOff toggleType={'host'}/>
            </div>
            <UnmountClosed isOpened={hostContext.isHostState}>
            <div className="openHost">
                <p className="roomNumber">Room Number: {roomNameContext.roomNameState}</p>
                <div className="participantContainer">
                    <p className="underline">Participants</p>
                    <Participants />
                </div>
                <button onClick={handleButton}>Start Swiping</button>
            </div>
            </UnmountClosed>
        </div>
    )
}

export default HostRoom
