import React, { useReducer, useEffect } from 'react'
import Nickname from './Nickname'
import HostRoom from './HostRoom'
import JoinRoom from './JoinRoom'
import './Rooms.scss'

//useContext to deal with the state
export const HostContext = React.createContext()
export const JoinContext = React.createContext()
//useContext to deal with the nickname
export const NicknameContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
    switch(action.type) {
        case 'toggleRoom':
            if (state === 0) {
                return 1
            } else {
                return 0
            }
        case 'setNickname':
            return action.name
        default:
            return state
    }
}

const Rooms = () => {
    //If the toggle is on or not with the host
    const [isHost, dispatchOne] = useReducer(reducer, initialState)
    const [isJoin, dispatchTwo] = useReducer(reducer, initialState)
    //Nickname state
    const [nickname, dispatchNickname] = useReducer(reducer, '')

    useEffect(() => {
        console.log(isHost)
    }, [reducer])

    return (
        <div className="Rooms">
            <NicknameContext.Provider
                value={{ nicknameState: nickname, nicknameDispatch: dispatchNickname }}
            >
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
            </NicknameContext.Provider>
            {isHost} {isJoin} {nickname}
        </div>
    )
}

export default Rooms
