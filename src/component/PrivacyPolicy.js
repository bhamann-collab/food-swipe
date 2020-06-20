import React from 'react'
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
            <p>I understand that this app takes my GPS coordinates. I also agree with Google </p><a href="/termsOfService"> Terms of Service </a> <p>and </p><a href="/privacyPolicy">Privacy Policy.</a>
        </div>
    )
}

export default PrivacyPolicy
