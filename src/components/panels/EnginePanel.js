import LiveTable from '../LiveTable.js';
import Docker from '../../data/Docker.js';
import config from '../../config.js';

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_VERSION,
    FETCH_RATE_FOR_INFO,
} = config;

export default
function EnginePanel(props) {

    // The version.Components array is not necessarily guaranteed to be in the
    // same order...

    const docker = Docker(HOST, PORT, API_VERSION);

    return (
        <div className="panel engine-panel">
            <LiveTable title="Platform" ms={FETCH_RATE_FOR_VERSION} check={
                function(callback) {
                    docker.version(result => callback([
                        [ 'Platform Name'         , result['Platform']?.['Name'] ],
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

            <LiveTable title="Docker Engine" ms={FETCH_RATE_FOR_VERSION} check={
                function(callback) {
                    docker.version(result => 
                        callback([
                            [ 'Version'          , result['Components']?.[0]['Version'] ],
                            [ 'API Version'      , result['Components']?.[0]['Details']['ApiVersion'] ],
                            [ 'Min API Version'  , result['Components']?.[0]['Details']['MinAPIVersion'] ],
                            [ 'Architecture'     , result['Components']?.[0]['Details']['Arch'] ],
                            [ 'Kernel Version'   , result['Components']?.[0]['Details']['KernelVersion'] ],
                            [ 'Operating System' , result['Components']?.[0]['Details']['Os'] ],
                            [ 'Build Time'       , result['Components']?.[0]['Details']['BuildTime'] ],
                            [ 'Experimental'     , result['Components']?.[0]['Details']['Experimental'] ],
                            [ 'Git Commit'       , result['Components']?.[0]['Details']['GitCommit'] ],
                            [ 'Go Version'       , result['Components']?.[0]['Details']['GoVersion'] ],
                        ])
                    );
                }
            } />

            <LiveTable title="containerd" ms={FETCH_RATE_FOR_VERSION} check={
                function(callback) {
                    docker.version(result => 
                        callback([
                            [ 'Version'          , result['Components']?.[1]['Version'] ],
                            [ 'Git Commit'       , result['Components']?.[1]['Details']['GitCommit'] ],
                        ])
                    );
                }
            } />

            <LiveTable title="runc" ms={FETCH_RATE_FOR_VERSION} check={
                function(callback) {
                    docker.version(result => 
                        callback([
                            [ 'Version'          , result['Components']?.[2]['Version'] ],
                            [ 'Git Commit'       , result['Components']?.[2]['Details']['GitCommit'] ],
                        ])
                    );
                }
            } />

            <LiveTable title="docker-init" ms={FETCH_RATE_FOR_VERSION} check={
                function(callback) {
                    docker.version(result => 
                        callback([
                            [ 'Version'          , result['Components']?.[3]['Version'] ],
                            [ 'Git Commit'       , result['Components']?.[3]['Details']['GitCommit'] ],
                        ])
                    );
                }
            } />
            
            <LiveTable title="Info" ms={FETCH_RATE_FOR_INFO} check={
                function(callback) {
                    docker.info(result => 
                        callback([
                            [ 'Driver Status'          , '►' ],
                            [ 'Plugins'                , '►' ],
                            [ 'Registry Config'        , '►' ],
                            [ 'Runtimes'               , '►' ],
                            [ 'Swarm'                  , '►' ],
                            [ 'Containerd Commit'      , '►' ],
                            [ 'Runc Commit'            , '►' ],
                            [ 'Init Commit'            , '►' ],
                            [ 'Security Options'       , '►' ],
                            [ 'Labels'                 , '►' ],
                            [ 'ID'                     , result['ID'] ],
                            [ 'Warnings'               , result['Warnings'] ],
                            [ 'Containers'             , result['Containers'] ],
                            [ 'Containters Running'    , result['ContainersRunning'] ],
                            [ 'Containers Paused'      , result['ContainersPaused'] ],
                            [ 'Containers Stopped'     , result['ContainersStopped'] ],
                            [ 'Images'                 , result['Images'] ],
                            [ 'Driver'                 , result['Driver'] ],
                            [ 'Memory Limit'           , result['MemoryLimit'] ],
                            [ 'Swap Limit'             , result['SwapLimit'] ],
                            [ 'Kernel Memory'          , result['KernelMemory'] ],
                            [ 'Kernel Memory TCP'      , result['Kernel Memory TCP'] ],
                            [ 'CPU CFS Period'         , result['CpuCfsPeriod'] ],
                            [ 'CPU CFS Quota'          , result['CpuCfsQuota'] ],
                            [ 'CPU Shares'             , result['CPUShares'] ],
                            [ 'CPU Set'                , result['CPUSet'] ],
                            [ 'PIDs Limit'             , result['PidsLimit'] ],
                            [ 'IPv4 Forwarding'        , result['IPv4Forwarding'] ],
                            [ 'Bridge NF IP Tables'    , result['BridgeNfIptables'] ],
                            [ 'Bridge NF IPv6 Tables'  , result['BridgeNfIp6tables'] ],
                            [ 'Debug'                  , result['Debug'] ],
                            [ 'NFd'                    , result['NFd'] ],
                            [ 'OOM Kill Disabled'      , result['OomKillDisable'] ],
                            [ 'Go Routines'            , result['NGoroutines'] ],
                            [ 'System Time'            , result['SystemTime'] ],
                            [ 'Logging Driver'         , result['LoggingDriver'] ],
                            [ 'cgroup Driver'          , result['CgroupDriver'] ],
                            [ 'cgroup Version'         , result['CgroupVersion'] ],
                            [ 'Event Listeners'        , result['NEventsListener'] ],
                            [ 'Kernel Version'         , result['KernelVersion'] ],
                            [ 'Operating System'       , result['OperatingSystem'] ],
                            [ 'OS Version'             , result['OSVersion'] ],
                            [ 'OS Type'                , result['OSType'] ],
                            [ 'Architecture'           , result['Architecture'] ],
                            [ 'Index Server Address'   , result['IndexServerAddress'] ],
                            [ 'CPUs'                   , result['NCPU'] ],
                            [ 'Total Memory'           , result['MemTotal'] ],
                            [ 'Generic Resources'      , result['GenericResources'] ],
                            [ 'Docker Root Directory'  , result['DockerRootDir'] ],
                            [ 'HTTP Proxy'             , result['HttpProxy'] ],
                            [ 'HTTPS Proxy'            , result['HttpsProxy'] ],
                            [ 'No Proxy'               , result['NoProxy'] ],
                            [ 'Name'                   , result['Name'] ],
                            [ 'Experimental Build'     , result['ExperimentalBuild'] ],
                            [ 'Server Version'         , result['ServerVersion'] ],
                            [ 'Default Runtime'        , result['DefaultRuntime'] ],
                            [ 'Live Restore Enabled'   , result['LiveRestoreEnabled'] ],
                            [ 'Isolation'              , result['Isolation'] ],
                            [ 'Init Binary'            , result['InitBinary'] ],
                        ])
                    );
                }
            } />
        </div>
    );
};