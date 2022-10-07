import * as React from "react";
import Table from "../../common/Table";
import config from "../../../config";
import { getConfigTable } from "../../../adapters/table-mapper";

export default function MonitorPanel() {
  return (
    <div className="panel containers-panel">
      <Table title="Configuration" rows={getConfigTable(config)} />
    </div>
  );
}
