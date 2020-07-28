import React, { useContext, useEffect, useState } from 'react'
import ToggleOnOff from './ToggleOnOff'
import JoinModal from './JoinModal'
import { JoinContext, NicknameContext } from './Rooms'
import { UnmountClosed } from 'react-collapse'
import { SocketContext, socket } from '../../App'

const JoinRoom = () => {
    const [validRoom, setValidRoom] = useState(false)
    const [code, setCode] = useState('')
    //Showing and hiding modals
    const [show, setShow] = useState(false)

    //Using to send nickname to server
    const nicknameContext = useContext(NicknameContext)

    //If the isJoin flag is true, then we can use the functionality of this component
    const joinContext = useContext(JoinContext)

    //socket.io
    const socketContext = useContext(SocketContext)

    const handleChange = e => {
        setCode(e.target.value)
        socketContext.emit("Is Room Valid?", e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleButton = () => {
        modalClick()
        socket.emit('send nickname', { nickname: nicknameContext.nicknameState, code: code })
    }

    const modalClick = () => {
        console.log(code)
        socket.emit('remove from room', code)
        setShow(!show)
    }

    useEffect(() => {
        socketContext.on('room is valid', () => {
            setValidRoom(true)
        })
        socketContext.on('room is not valid', () => {
            setValidRoom(false)
        })
    }, [])

    return (
        <div className="JoinRoom">
            <JoinModal show={show} modalClick={modalClick} />
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
                    >{validRoom && `Room is Valid!`}</p>
                    <button onClick={validRoom ? handleButton : null}>Join Room</button>
                </form>
            </UnmountClosed> 
        </div>
    )
}

export default JoinRoom
