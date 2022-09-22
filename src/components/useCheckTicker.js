import {useState, useEffect} from 'react';

export default
function useCheckTicker(check, ms) {

    const [data, setData] = useState(null);

    useEffect(function() {
        const timerID = setInterval( () => check( result => setData(result) ), ms );
        return () => clearInterval(timerID);
    });

    return data;
}