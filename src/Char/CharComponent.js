import React from 'react';


const char = (props) => {

    const cstyles = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px', 
        border: '1px solid black'
    }

    return (
        <div style={cstyles}>
         <p onClick={props.click}>{props.aver}</p>
        </div>
    )
}

export default char;