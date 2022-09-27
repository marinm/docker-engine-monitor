import * as React from 'react';
import LiveTables from '../../common/LiveTables';
import {Docker} from '../../../data/Docker';
import config from '../../../config';
import tables from '../../../adapters/table-mapper';

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_CONTAINERS
} = config;

const {
    get_containers_tables
} = tables;

export default
function ContainersPanel() {

    const docker = Docker(HOST, PORT, API_VERSION);

    return (
        <div className="panel containers-panel">
            <LiveTables check={get_containers_tables(docker)} ms={FETCH_RATE_FOR_CONTAINERS}  />
        </div>
    );
};