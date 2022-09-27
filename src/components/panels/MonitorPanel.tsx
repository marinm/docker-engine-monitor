import * as React from 'react';
import Table from '../Table';
import config from '../../config';
import tables from '../tables';

const {
    get_config_table
} = tables;

export default
function MonitorPanel() {
    return (
        <div className="panel containers-panel">
            <Table title="Configuration" rows={get_config_table(config)} />
        </div>
    );
};