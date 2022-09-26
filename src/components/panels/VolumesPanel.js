import LiveTables from '../LiveTables.js';
import Docker from '../../data/Docker.js';
import config from '../../config.js';
import tables from '../tables.js';

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_VOLUMES
} = config;

const {
    get_volumes_tables
} = tables;

export default
function VolumesPanel(props) {

    const docker = Docker(HOST, PORT, API_VERSION);

    return (
        <div className="panel volumes-panel">
            <LiveTables check={get_volumes_tables(docker)} ms={FETCH_RATE_FOR_VOLUMES}  />
        </div>
    );
};