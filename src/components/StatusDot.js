import useTimeoutGet from './useTimeoutGet.ts';

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
        <span className={"status-dot " + className()}>&#x2022;</span>
    );
}