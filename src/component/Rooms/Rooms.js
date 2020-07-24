import React, { useReducer, useEffect } from 'react'
import Nickname from './Nickname'
import HostRoom from './HostRoom'
import JoinRoom from './JoinRoom'
import './Rooms.scss'

//Use reducer to deal with the state
export const HostContext = React.createContext()
export const JoinContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'toggleRoom':
            if (state === 0) {
                return 1
            } else {
                return 0
            }
        case 'setJoin':
            return false
        default:
            return state
    }
}

const Rooms = () => {
    //If the toggle is on or not with the host
    const [isHost, dispatchOne] = useReducer(reducer, initialState)
    const [isJoin, dispatchTwo] = useReducer(reducer, initialState)

    useEffect(() => {
        console.log(isHost)
    }, [reducer])

    return (
        <div className="Rooms">
            <HostContext.Provider
                value={{ isHostState: isHost, isHostDispatch: dispatchOne }}
            >
            <JoinContext.Provider
                value={{ isJoinState: isJoin, isJoinDispatch: dispatchTwo }}
            >
                <Nickname />
                <HostRoom />
                <JoinRoom /> 
            </JoinContext.Provider>
            </HostContext.Provider>
            {isHost} {isJoin}
        </div>
    )
}

export default Rooms
