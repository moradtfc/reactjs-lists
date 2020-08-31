import React from 'react';

const validation = (props) => {

    let validationMessage = 'text too enough';

    if(props.length <= 5){
        validationMessage = 'text too short';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default validation;