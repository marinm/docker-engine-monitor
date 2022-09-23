import {useState, useEffect} from 'react';

export default
function useTimeoutGet(get, ms) {
    // Infinite re-render loop that fetches data every 'ms' milliseconds.

    const [data, setData] = useState(null);

    function tick() {
        get( (result) => setData(result) );
    }

    useEffect(() => {
        // Here assuming that (data === null) means no fetch has happened yet,
        // and that this is the first render. Fetch right away. On re-render,
        // data won't be null, so wait until the next refresh. If the fetch
        // returns null, this will short-circuit the re-rendering.
        // Don't let your check() call back with a null >:(
        const timerID = (data === null)? (tick(), null) : setTimeout(tick, ms);
        return () => clearTimeout(timerID);
    });

    return data;
};