import React, { useReducer } from 'react'
import Nickname from './Nickname'
import HostRoom from './HostRoom'
import JoinRoom from './JoinRoom'
import './Rooms.scss'

//Use reducer to deal with the state
export const HostContext = React.createContext()

const initialStateHost = false;
const reducer = (state, action) => {
    switch(action) {
        case 'setHost':
            return true
        case 'setJoin':
            return false
        default:
            return state
    }
}

const Rooms = () => {
    const [isHost, dispatch] = useReducer(reducer, initialStateHost)

    return (
        <div className="Rooms">
            <HostContext.Provider
                value={{ isHostState: isHost, isHostDispatch: dispatch }}
            >
                <Nickname />
                <HostRoom />
                <JoinRoom /> 
            </HostContext.Provider>
        </div>
    )
}

export default Rooms
