import LiveTables from '../LiveTables.js';
import Docker from '../../data/Docker.js';
import config from '../../config.js';
import tables from '../tables.js';

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_IMAGES
} = config;

const {
    get_images_tables
} = tables;

export default
function ImagesPanel(props) {

    const docker = Docker(HOST, PORT, API_VERSION);

    return (
        <div className="panel images-panel">
            <LiveTables check={get_images_tables(docker)} ms={FETCH_RATE_FOR_IMAGES}  />
        </div>
    );
};