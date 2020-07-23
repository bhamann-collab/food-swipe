import React, { useState, useContext, useEffect, useRef } from 'react'
import { HostContext, JoinContext } from './Rooms'
import Switch from 'react-input-switch'

const ToggleOnOff = (props) => {
    const [value, setValue] = useState(1);
    //We are changing the value of the isHost flag everytime we are clicking on the component
    const hostContext = useContext(HostContext)
    const joinContext = useContext(JoinContext)

    //Don't want to render anything when first mounted
    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        if(props.toggleType === 'host') {
            hostContext.isHostDispatch('setHost')
        } else {
            joinContext.isJoinDispatch('setHost')
        }
    }, [value])

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
