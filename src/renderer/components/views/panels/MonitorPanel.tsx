import * as React from "react";
import Table from "../../common/Table";
import config from "../../../config";
import tables from "../../../adapters/table-mapper";

const { get_config_table } = tables;

export default function MonitorPanel() {
  return (
    <div className="panel containers-panel">
      <Table title="Configuration" rows={get_config_table(config)} />
    </div>
  );
}
