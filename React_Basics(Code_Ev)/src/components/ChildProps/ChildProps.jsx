import React from 'react';

const ChildProps = (props) => {
    console.log(props)
    return (
        <>
            {props.children}
        </>
    )
}

export default ChildProps;