import React, { useContext } from 'react'
import { NicknameContext } from './Rooms'

const Nickname = () => {
    //
    const nicknameContext = useContext(NicknameContext)

    const handleChange = e => {
        nicknameContext.nicknameDispatch({type: 'setNickname', name: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="Nickname">
            <form onSubmit={handleSubmit}>
                <label>
                    NickName: 
                    <input type="text" onChange={handleChange}/>
                </label>
            </form> 
        </div>
    )
}

export default Nickname
