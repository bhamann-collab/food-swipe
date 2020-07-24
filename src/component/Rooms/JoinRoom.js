import React, { useContext } from 'react'
import ToggleOnOff from './ToggleOnOff'
import { JoinContext } from './Rooms'
import { UnmountClosed } from 'react-collapse'

const JoinRoom = () => {
    //If the isJoin flag is true, then we can use the functionality of this component
    const joinContext = useContext(JoinContext)

    const handleSubmit = e => {
        e.preventDefault();
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
                    <button>Join Room</button>
                </form>
            </UnmountClosed> 
        </div>
    )
}

export default JoinRoom
