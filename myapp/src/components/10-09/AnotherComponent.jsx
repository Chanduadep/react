import React, { memo } from 'react';
import '../10-09/memo.css';
const AnotherComponent = ({counter2}) => {
    console.log("Inside Another Component...")
    return (
        <div>
        <h2>AnotherComponent:{counter2}</h2>
        </div>
    )
}

export default memo(AnotherComponent);