import React from 'react';

function ReceiveValue(props)
{
    return (
        <div>
            <h1>Today we have {props.dishName1} and {props.dishName2}</h1>
            <h1>Published through actions</h1>
        </div>
    );
}

export default ReceiveValue;