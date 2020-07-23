import React from 'react'

const Nickname = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="Nickname">
            <form onSubmit={handleSubmit}>
                <label>
                    NickName: 
                    <input type="text"/>
                </label>
            </form> 
        </div>
    )
}

export default Nickname
