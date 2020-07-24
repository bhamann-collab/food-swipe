import React, { useContext } from 'react';
import ToggleOnOff from './ToggleOnOff';
import { HostContext } from './Rooms';
import { UnmountClosed } from 'react-collapse';

const HostRoom = () => {
    //If the isHost flag is true, then we can use the functionality of this component
    const hostContext = useContext(HostContext)

    return (
        <div className="HostRoom">
            <div className="toggling">
                <p>Host Room</p>
                <ToggleOnOff toggleType={'host'}/>
            </div>
            <UnmountClosed isOpened={hostContext.isHostState} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div className="openHost">
                <p className="roomNumber">Room Number: A5B26</p>
                <div className="participantContainer">
                    <p className="underline">Participants</p>
                </div>
                <button>Start Swiping</button>
            </div>
            </UnmountClosed>
        </div>
    )
}

export default HostRoom
