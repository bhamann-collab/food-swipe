import React, { useState, useEffect } from 'react'
import {socket} from '../../App'

const Participants = () => {
    const [participants, setParticipants] = useState([])

    useEffect(() => {
        socket.on('add participant', (nickname) => {
            setParticipants(prevParticipants => [...prevParticipants, nickname])
        })
    }, [])

    const listItems = participants.map((name, key) => <li key={key}>{name}</li>)

    return (
        <div className="Participants">
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default Participants
