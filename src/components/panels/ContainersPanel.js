import LiveTables from '../LiveTables.js';
import Docker from '../../data/Docker.js';
import config from '../../config.js';
import tables from '../tables.js';

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_CONTAINERS
} = config;

const {
    get_containers_tables
} = tables;

export default
function ContainersPanel(props) {

    const docker = Docker(HOST, PORT, API_VERSION);

    return (
        <div className="panel containers-panel">
            <LiveTables check={get_containers_tables(docker)} ms={FETCH_RATE_FOR_CONTAINERS}  />
        </div>
    );
};