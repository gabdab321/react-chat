import React from 'react';
import cl from "./Error.module.scss"

interface ErrorProps {
    message: string,
    visible: boolean
}

const Error = ({message, visible}: ErrorProps) => {
    return (
        <div hidden={!visible} className={cl.main}> {message} </div>
    );
};

export default Error;