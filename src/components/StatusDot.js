import React, {useState, useEffect} from 'react';

export default
function StatusDot(props) {

    const {check, ms} = props;

    const [status, setStatus] = useState(null);

    useEffect(function() {
        const timerID = setInterval( () => check( result => setStatus(result) ), ms );
        return () => clearInterval(timerID);
    });

    function className() {
        return (status === true)
            ? 'ok'
            : (status === false)
            ? 'error'
            : 'unknown';
    }

    return (
        <>
            <div className={"status-dot " + className()}></div>
            { status ? 'Engine is online' : 'Is the engine API online?'}
        </>
        
    );
}