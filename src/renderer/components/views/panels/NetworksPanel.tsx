import * as React from "react";
import LiveTables from "../../common/LiveTables";
import { Docker } from "../../../data/Docker";
import config from "../../../config";
import { getNetworksTables } from "../../../adapters/table-mapper";

const { HOST, PORT, API_VERSION, FETCH_RATE_FOR_NETWORKS } = config;

export default function NetworksPanel() {
  const docker = Docker(HOST, PORT, API_VERSION);

  return (
    <div className="panel networks-panel">
      <LiveTables
        check={getNetworksTables(docker)}
        ms={FETCH_RATE_FOR_NETWORKS}
      />
    </div>
  );
}
