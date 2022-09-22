import {useState, useEffect} from 'react';

export default
function useCheckTicker(check, ms) {

    const [data, setData] = useState(null);

    function tick() {
        check( (result) => setData(result) );
    }

    useEffect(function() {
        const timerID = setInterval(tick, ms);
        return () => clearInterval(timerID);
    });

    return data;
}