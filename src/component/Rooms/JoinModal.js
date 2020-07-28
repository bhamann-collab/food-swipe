import React from 'react'

const JoinModal = (props) => {

    if(!props.show) {
        return null;
    }
    return (
        <div className="modal">
            <h1>Waiting for Host to start</h1>
            <button onClick={props.modalClick}>CANCEL</button>
        </div>
    )
}

export default JoinModal
