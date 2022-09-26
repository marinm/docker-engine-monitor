import LiveTables from '../LiveTables.js';
import Docker from '../../data/Docker.js';
import config from '../../config.js';
import tables from '../tables.js';

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_NETWORKS
} = config;

const {
    get_networks_tables
} = tables;

export default
function NetworksPanel(props) {

    const docker = Docker(HOST, PORT, API_VERSION);

    return (
        <div className="panel networks-panel">
            <LiveTables check={get_networks_tables(docker)} ms={FETCH_RATE_FOR_NETWORKS}  />
        </div>
    );
};