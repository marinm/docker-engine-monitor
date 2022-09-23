import Table from '../Table.js';
import config from '../../config.js';

function toRows(dict) {
    return Object.keys(dict).map(key => [key, dict[key]]);
}

export default
function MonitorPanel(props) {
    return (
        <div className="panel containers-panel">
            <Table title="Configuration" rows={toRows(config)} />
        </div>
    );
};