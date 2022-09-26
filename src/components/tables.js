import canReachDocker from '../data/can-reach-docker.js';
import StatusDot from './StatusDot.js';

function get_platform_table(docker) {
    return function(callback) {
        docker.version(result => callback([
            [ 'Docker HTTP API'       , <StatusDot check={canReachDocker} ms={1000} />],
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
    };
}

function get_docker_engine_table(docker) {
    // The version.Components array is not necessarily guaranteed to be in the
    // same order...
    
    return function(callback) {
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
    };
}

function get_containerd_table(docker) {
    return function(callback) {
        docker.version(result => 
            callback([
                [ 'Version'          , result['Components']?.[1]['Version'] ],
                [ 'Git Commit'       , result['Components']?.[1]['Details']['GitCommit'] ],
            ])
        );
    };
}

function get_runc_table(docker) {
    return function(callback) {
        docker.version(result => 
            callback([
                [ 'Version'          , result['Components']?.[2]['Version'] ],
                [ 'Git Commit'       , result['Components']?.[2]['Details']['GitCommit'] ],
            ])
        );
    };
}

function get_docker_init_table(docker) {
    return function(callback) {
        docker.version(result => 
            callback([
                [ 'Version'          , result['Components']?.[3]['Version'] ],
                [ 'Git Commit'       , result['Components']?.[3]['Details']['GitCommit'] ],
            ])
        );
    };
}

function get_info_table(docker) {
    return function(callback) {
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
    };
}

function get_images_tables(docker) {
    return function(callback) {
        docker.images(result =>
            callback(
                 result?.map(image => ({
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
                }))
            )
        );
    }
}

function get_config_table(config) {
    return Object.keys(config).map(key => [key, config[key]]);
}

function get_networks_tables(docker) {
    return function (callback) {
        docker.networks(result =>
            callback(
                result.map(container => ({
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
                        //[ 'IPAM Options' , container['IPAM']['Options'] ],
                        [ 'Config'       , '---' ],
                        [ 'Internal'     , container['Internal'] ],
                        [ 'Attachable'   , container['Attachable'] ],
                        [ 'Ingress'      , container['Ingress'] ],
                    ],
                }))
            )
        );
    };
}

function get_volumes_tables(docker) {
    return function (callback) {
        docker.volumes(result =>
            callback(
                result['Volumes']?.map(volume => ({
                    key: volume['Name'],
                    title: "Volume",
                    rows: [
                        ['Name'       , volume['Name']],
                        ['Created at' , volume['CreatedAt']],
                        ['Driver'     , volume['Driver']],
                        //['Labels'     , volume['Labels']],
                        ['Mountpoint' , volume['Mountpoint']],
                        //['Options'    , volume['Options']],
                        ['scope'      , volume['Scope']],
                    ],
                }))
            )
        );
    }
}

function get_containers_tables(docker) {
    return function (callback) {
        docker.containers(result =>
            callback(
                result.map(container => ({
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
                }))
            )
        );
    }
}

const tables = {
    get_platform_table,
    get_docker_engine_table,
    get_containerd_table,
    get_runc_table,
    get_docker_init_table,
    get_info_table,
    get_images_tables,
    get_config_table,
    get_networks_tables,
    get_volumes_tables,
    get_containers_tables,
};

export default tables;