import React from 'react'

const ModalTitle = (props) => {

    if(!props.show) {
        return null;
    }
    return (
        <div className="modal">
            <h1>Check box below before you start</h1>
            <button onClick={props.modalClick}>OK</button>
        </div>
    )
}

export default ModalTitle
