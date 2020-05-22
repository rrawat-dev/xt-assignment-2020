import React, { useState } from 'react';
import StyledApp from './App.style';

export default function(props) {
    const [count, setCount] = useState(3);
    return (
        <StyledApp>
            <h1>{count}</h1>
        </StyledApp>
    );
}