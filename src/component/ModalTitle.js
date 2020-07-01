import React from 'react'

const ModalTitle = (props) => {

    if(!props.show) {
        return null;
    }
    return (
        <div>
            <h1>Hello, I am a modal</h1>
        </div>
    )
}

export default ModalTitle
