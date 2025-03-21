import React from 'react';

const ChildProps = (props) => {
    console.log(props)
    return (
        <>
            <h1> Hi, this is {props.children} </h1>
        </>
    )
}

export default ChildProps;