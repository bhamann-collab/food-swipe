import React, { useContext } from 'react'
import ToggleOnOff from './ToggleOnOff'
import { JoinContext } from './Rooms'
import { UnmountClosed } from 'react-collapse'
import { SocketContext } from '../../App'

const JoinRoom = () => {
    //If the isJoin flag is true, then we can use the functionality of this component
    const joinContext = useContext(JoinContext)

    //socket.io
    const socketContext = useContext(SocketContext)

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleButton = () => {
        socketContext.emit("search code", '')
    }
    
    return (
        <div className="JoinRoom">
            <div className="toggling">
                <p>Join Room</p>
                <ToggleOnOff />
            </div>
            <UnmountClosed isOpened={joinContext.isJoinState}>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Enter Code:</p> 
                        <input type="text"/>
                    </label>
                    <p
                    style={{color: "#27ae60"}}
                    >Room is Valid! (ExampleName)</p>
                    <button onClick={handleButton}>Join Room</button>
                </form>
            </UnmountClosed> 
        </div>
    )
}

export default JoinRoom
