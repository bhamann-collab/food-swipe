import React from 'react'
import ToggleOnOff from './ToggleOnOff'

const JoinRoom = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }
    
    return (
        <div className="JoinRoom">
            <div className="toggling">
                <p>Join Room</p>
                <ToggleOnOff />
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Enter Room Code:</p> 
                    <input type="text"/>
                </label>
                <p
                style={{color: "#27ae60"}}
                >Room is Valid! (ExampleName)</p>
                <button>Join Room</button>
            </form> 
        </div>
    )
}

export default JoinRoom
