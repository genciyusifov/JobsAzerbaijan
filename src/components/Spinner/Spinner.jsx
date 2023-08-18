import React from 'react'
import { PacmanLoader } from 'react-spinners'

function Spinner() {
    return (
        <div className='m-auto overflow-hidden py-32'>
            <PacmanLoader
                color="#36d7b7"
                size={100}
            />
        </div>
    )
}

export default Spinner