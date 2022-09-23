import LiveTables from '../LiveTables.js';
import Docker from '../../data/Docker.js';
import config from '../../config.js';

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_IMAGES
} = config;


function toRowGroups(result) {
    return result?.map(image => ({
        key: image['Id'],
        title: "Image",
        rows: [
            ['ID'           , image['Id']],
            ['Created at'   , image['Created']],
            ['Size'         , image['Size']],
            ['Virtual Size' , image['VirtualSize']],
            ['SharedSize'   , image['SharedSize']],
            ['Parent ID'    , image['ParentId']],
            ['Containers'   , image['Containers']]
        ],
    }));
}

export default
function ImagesPanel(props) {

    const docker = Docker(HOST, PORT, API_VERSION);

    function check(callback) {
        docker.images(function(result) {
            callback(toRowGroups(result))
        });
    }

    return (
        <div className="panel images-panel">
            <LiveTables check={check} ms={FETCH_RATE_FOR_IMAGES}  />
        </div>
    );
};