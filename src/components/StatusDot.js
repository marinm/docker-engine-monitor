import useTimeoutGet from './useTimeoutGet.js';

export default
function StatusDot(props) {

    const {check, ms} = props;

    const status = useTimeoutGet(check, ms);

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