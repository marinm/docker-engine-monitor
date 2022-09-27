import Table from '../Table.tsx';
import config from '../../config.js';
import tables from '../tables.js';

const {
    get_config_table
} = tables;

export default
function MonitorPanel(props) {
    return (
        <div className="panel containers-panel">
            <Table title="Configuration" rows={get_config_table(config)} />
        </div>
    );
};