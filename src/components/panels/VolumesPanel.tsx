import * as React from 'react';
import LiveTables from '../LiveTables';
import {Docker} from '../../data/Docker';
import config from '../../config';
import tables from '../tables';

const {
    HOST,
    PORT,
    API_VERSION,
    FETCH_RATE_FOR_VOLUMES
} = config;

const {
    get_volumes_tables
} = tables;

export default
function VolumesPanel() {

    const docker = Docker(HOST, PORT, API_VERSION);

    return (
        <div className="panel volumes-panel">
            <LiveTables check={get_volumes_tables(docker)} ms={FETCH_RATE_FOR_VOLUMES}  />
        </div>
    );
};