import React, { useState } from 'react'
import Switch from 'react-input-switch'

const ToggleOnOff = () => {
    const [value, setValue] = useState(0);


    return (
        <div>
            <Switch styles={{
                container: {
                    width: 60,
                    height: 22
                },
                track: {
                    backgroundColor: '#0652DD',
                },
                trackChecked: {
                    backgroundColor: '#95a5a6'
                },
                button: {
                    backgroundColor: 'white',
                    right: 30,
                    left: 2
                },               
                buttonChecked: {
                    right: 2,
                    left: 30
                }
            }} value={value} onChange={setValue} 
            />
        </div>
    )
}

export default ToggleOnOff
