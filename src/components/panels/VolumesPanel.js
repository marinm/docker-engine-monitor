import LiveTables from '../LiveTables.js';
import Docker from '../../data/Docker.js';
import config from '../../config.js';

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_VOLUMES
} = config;


function toRowGroups(result) {
    console.log(result);
    return result['Volumes']?.map(volume => ({
        key: volume['Name'],
        title: "Volume",
        rows: [
            ['Name'       , volume['Name']],
            ['Driver'     , volume['Driver']],
            ['Labels'     , volume['Labels']],
            ['Mountpoint' , volume['Mountpoint']],
            ['Options'    , volume['Options']],
            ['scope'      , volume['Scope']],
        ],
    }));
}

export default
function ContainersPanel(props) {

    const docker = Docker(HOST, PORT, API_VERSION);

    function check(callback) {
        docker.volumes(function(result) {
            callback(toRowGroups(result))
        });
    }

    return (
        <div className="panel volumes-panel">
            <LiveTables check={check} ms={FETCH_RATE_FOR_VOLUMES}  />
        </div>
    );
};