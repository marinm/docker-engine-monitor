import '../css/Body.css';
import LiveTable from './LiveTable.js';

import Docker from '../data/Docker.js';
import config from '../config.js';

const {
    HOST,
    PORT,
    API_VERSION,
} = config;

export default
function Body() {

    const docker = Docker(HOST, PORT, API_VERSION);

    // The version.Components array is not necessarily guaranteed to be in the
    // same order...

    return (
        <div className="Body">
            <LiveTable title="Platform" ms={5 * 1000} check={
                function(callback) {
                    docker.version(result => callback([
                        [ 'Platform Name'         , result['Platform']['Name'] ],
                        [ 'Docker Engine version' , result['Version'] ],
                        [ 'API Version'           , result['ApiVersion'] ],
                        [ 'Min API Version'       , result['MinAPIVersion'] ],
                        [ 'Git Commit'            , result['GitCommit'] ],
                        [ 'Go Version'            , result['Go Version'] ],
                        [ 'Operating System'      , result['Os'] ],
                        [ 'Architecture'          , result['Arch'] ],
                        [ 'Kernel Version'        , result['KernelVersion'] ],
                        [ 'Build Time'            , result['Buildtime'] ],
                    ]));
                }
            } />

        <LiveTable title="Docker Engine" ms={5 * 1000} check={
                function(callback) {
                    docker.version(
                        result => 
                            callback([
                                [ 'Version'          , result['Components'][0]['Version'] ],
                                [ 'API Version'      , result['Components'][0]['Details']['ApiVersion'] ],
                                [ 'Min API Version'  , result['Components'][0]['Details']['MinAPIVersion'] ],
                                [ 'Architecture'     , result['Components'][0]['Details']['Arch'] ],
                                [ 'Kernel Version'   , result['Components'][0]['Details']['KernelVersion'] ],
                                [ 'Operating System' , result['Components'][0]['Details']['Os'] ],
                                [ 'Build Time'       , result['Components'][0]['Details']['BuildTime'] ],
                                [ 'Experimental'     , result['Components'][0]['Details']['Experimental'] ],
                                [ 'Git Commit'       , result['Components'][0]['Details']['GitCommit'] ],
                                [ 'Go Version'       , result['Components'][0]['Details']['GoVersion'] ],
                            ])
                    );
                }
            } />
        </div>
    )
}