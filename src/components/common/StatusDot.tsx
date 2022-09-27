import * as React from 'react';
import {useTimeoutGet} from '../../hooks/useTimeoutGet';

type Receiver = (data: any) => void;
type Getter = (callback :Receiver) => void;

type Props = {
    check :Getter;
    ms    :number;
}

export default
function StatusDot({check, ms} :Props) {

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