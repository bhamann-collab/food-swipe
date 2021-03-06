import React, { useReducer } from 'react'
import Nickname from './Nickname'
import HostRoom from './HostRoom'
import JoinRoom from './JoinRoom'
import './Rooms.scss'
import {socket} from '../../App'

//useContext to deal with the state
export const HostContext = React.createContext()
export const JoinContext = React.createContext()
//useContext to deal with the nickname
export const NicknameContext = React.createContext()
//useContext to deal with the room name
export const RoomNameContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
    console.log('testing')
    switch(action.type) {
        case 'toggleRoom':
            if (state === 0) {
                return 1
            } else {
                return 0
            }
        case 'setNickname':
            return action.name
        case 'generateRoomNumber':
            let randomLetters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
            socket.emit("room code", { code: randomLetters, nickname: action.nickname})
            return randomLetters;
        case 'removeRoomNumber':
            socket.emit("delete room", action.room);
            return '';
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
    //Room Number state
    const [roomName, dispatchRoomName] = useReducer(reducer, '')

    return (
        <div className="Rooms">
            <RoomNameContext.Provider
                value={{ roomNameState: roomName, roomNameDispatch: dispatchRoomName }}
            >
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
            </RoomNameContext.Provider>
        </div>
    )
}

export default Rooms
