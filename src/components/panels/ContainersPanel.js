import LiveTables from '../LiveTables.js';
import Docker from '../../data/Docker.js';
import config from '../../config.js';

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_CONTAINERS
} = config;


function toRowGroups(result) {
    return result.map(container => ({
        key: container['Id'],
        title: "Container",
        rows: [
            [ 'ID'       , container['Id'] ],
            [ 'Image'    , container['Image'] ],
            [ 'Command'  , container['Command'] ],
            [ 'Created'  , container['Created'] ],
            [ 'State'    , container['State'] ],
            [ 'Status'   , container['Status'] ],
        ],
    }));
}

export default
function ContainersPanel(props) {

    const docker = Docker(HOST, PORT, API_VERSION);

    function check(callback) {
        docker.containers(function(result) {
            console.log(toRowGroups(result));
            callback(toRowGroups(result))
        });
    }

    return (
        <div className="panel containers-panel">
            <LiveTables check={check} ms={FETCH_RATE_FOR_CONTAINERS}  />
        </div>
    );
};