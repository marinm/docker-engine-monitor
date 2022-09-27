import * as React from 'react';
import LiveTable from '../../common/LiveTable';
import {Docker} from '../../../data/Docker';
import config from '../../../config';
import tables from '../../tables';

const {
    get_platform_table,
    get_docker_engine_table,
    get_containerd_table,
    get_runc_table,
    get_docker_init_table,
    get_info_table,
} = tables;

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_VERSION,
    FETCH_RATE_FOR_INFO,
} = config;

export default
function EnginePanel() {

    const docker = Docker(HOST, PORT, API_VERSION);

    return (
        <div className="panel engine-panel">
            <LiveTable title="Platform"      ms={FETCH_RATE_FOR_VERSION} check={get_platform_table(docker)}      />
            <LiveTable title="Docker Engine" ms={FETCH_RATE_FOR_VERSION} check={get_docker_engine_table(docker)} />
            <LiveTable title="containerd"    ms={FETCH_RATE_FOR_VERSION} check={get_containerd_table(docker)}    />
            <LiveTable title="runc"          ms={FETCH_RATE_FOR_VERSION} check={get_runc_table(docker)}          />
            <LiveTable title="docker-init"   ms={FETCH_RATE_FOR_VERSION} check={get_docker_init_table(docker)}   />
            <LiveTable title="Info"          ms={FETCH_RATE_FOR_INFO}    check={get_info_table(docker)}          />
        </div>
    );
};