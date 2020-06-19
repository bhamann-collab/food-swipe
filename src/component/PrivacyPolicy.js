import React, { useState } from 'react'
import { Checkbox } from '@material-ui/core'

const PrivacyPolicy = ({ onClick, checked }) => {

    return (
        <div className="privacyPolicy">
            <Checkbox
            size="medium"
            color='primary'
            onClick={onClick}
            inputProps={{ 'aria-label': 'Checkbox A' }}
            />
            <p>I understand that this app takes my GPS coordinates and I agree with Google Terms of Service. </p>
        </div>
    )
}

export default PrivacyPolicy
