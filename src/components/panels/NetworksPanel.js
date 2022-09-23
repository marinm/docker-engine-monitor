import LiveTables from '../LiveTables.js';
import Docker from '../../data/Docker.js';
import config from '../../config.js';

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_NETWORKS
} = config;


function toRowGroups(result) {
    return result.map(container => ({
        key: container['Id'],
        title: "Network",
        rows: [
            [ 'ID'           , container['Id'] ],
            [ 'Name'         , container['Name'] ],
            [ 'Created'      , container['Created'] ],
            [ 'Scope'        , container['Scope'] ],
            [ 'Driver'       , container['Driver'] ],
            [ 'IPv6 Enabled' , container['EnableIPv6'] ],
            [ 'IPAM Driver'  , container['IPAM']['Driver'] ],
            [ 'IPAM Options' , container['IPAM']['Options'] ],
            [ 'Config'       , '---' ],
            [ 'Internal'     , container['Internal'] ],
            [ 'Attachable'   , container['Attachable'] ],
            [ 'Ingress'      , container['Ingress'] ],
        ],
    }));
}

export default
function ContainersPanel(props) {

    const docker = Docker(HOST, PORT, API_VERSION);

    function check(callback) {
        docker.networks(function(result) {
            callback(toRowGroups(result))
        });
    }

    return (
        <div className="panel networks-panel">
            <LiveTables check={check} ms={FETCH_RATE_FOR_NETWORKS}  />
        </div>
    );
};