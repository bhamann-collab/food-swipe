import React, { useState } from 'react'
import { Checkbox } from '@material-ui/core'

const PrivacyPolicy = () => {
    const [checked, setChecked] = useState(false)
    const handleClick = () => {
        setChecked(!checked)
    }  

    return (
        <div className="privacyPolicy">
            <Checkbox
            size="medium"
            color='primary'
            onClick={handleClick}
            inputProps={{ 'aria-label': 'Checkbox A' }}
            />
            <p>I understand that this app takes my GPS coordinates and I agree with Google Terms of Service. </p>
        </div>
    )
}

export default PrivacyPolicy
