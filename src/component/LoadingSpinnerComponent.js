import React, {useState} from 'react'
import { usePromiseTracker } from 'react-promise-tracker'
import { css } from '@emotion/core'
import SyncLoader from 'react-spinners/SyncLoader'

const LoadingSpinnerComponent = () => {
    const [loading] = useState(true)

    let { promiseInProgress } = usePromiseTracker({});

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    return (
        <div className="sweet-loading">
            {
+               (promiseInProgress === true) ?
                <div className="spinner">
                    <h1>Loading Restaurants</h1>
                    <SyncLoader 
                    css={override}
                    size={100}
                    color={"white"}
                    loading={loading}
                    />
                </div>
                :
                null
            }
        </div>
    )
}

export default LoadingSpinnerComponent
