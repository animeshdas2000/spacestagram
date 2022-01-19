import React from 'react'
import nasagif from "../../nasa-logo.gif"
import "./loading.css"
function Loading() {
    return (
        <div className='loading-div'>
            <div>
            <h3>Talking to the Moon 🚀</h3>
            </div>
             
            <img src={nasagif} width="50px" alt="" />
        </div>
    )
}


//create img loading component 

export default Loading
