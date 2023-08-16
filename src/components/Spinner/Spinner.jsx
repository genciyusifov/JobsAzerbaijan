import React from 'react'
import { BounceLoader } from 'react-spinners'

function Spinner() {
    return (
        <div className='m-auto'>
            <BounceLoader
                color="violet"
                loading
                size={300}
                speedMultiplier={1}
            />
        </div>
    )
}

export default Spinner