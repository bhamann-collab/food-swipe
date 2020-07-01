import React from 'react'

const ModalTitle = (props) => {

    if(!props.show) {
        return null;
    }
    return (
        <div className="modal">
            <h1>Hello, I am a modal</h1>
            <button onClick={props.modalClick}>undo me</button>
        </div>
    )
}

export default ModalTitle
