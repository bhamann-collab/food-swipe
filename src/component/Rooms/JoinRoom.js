import React, { useContext, useEffect } from 'react'
import ToggleOnOff from './ToggleOnOff'
import { JoinContext } from './Rooms'
import { UnmountClosed } from 'react-collapse'
import { SocketContext, socket } from '../../App'

const JoinRoom = () => {
    //If the isJoin flag is true, then we can use the functionality of this component
    const joinContext = useContext(JoinContext)

    //socket.io
    const socketContext = useContext(SocketContext)

    const handleChange = e => {
        socketContext.emit("Is Room Valid?", e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleButton = () => {
        socketContext.emit("search code", '')
    }

    useEffect(() => {
        socketContext.on()
    })
    
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
                        <input type="text" onChange={handleChange}/>
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
