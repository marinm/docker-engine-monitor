import * as React from "react";
import LiveTable from "../../common/LiveTable";
import { Docker } from "../../../data/Docker";
import config from "../../../config";
import {
  getPlatformTable,
  getDockerEngineTable,
  getContaineredTable,
  getRuncTable,
  getDockerInitTable,
  getInfoTable,
} from "../../../adapters/table-mapper";

const { HOST, PORT, API_VERSION, FETCH_RATE_FOR_VERSION, FETCH_RATE_FOR_INFO } =
  config;

export default function EnginePanel() {
  const docker = Docker(HOST, PORT, API_VERSION);

  return (
    <div className="panel engine-panel">
      <LiveTable
        title="Platform"
        ms={FETCH_RATE_FOR_VERSION}
        check={getPlatformTable(docker)}
      />
      <LiveTable
        title="Docker Engine"
        ms={FETCH_RATE_FOR_VERSION}
        check={getDockerEngineTable(docker)}
      />
      <LiveTable
        title="containerd"
        ms={FETCH_RATE_FOR_VERSION}
        check={getContaineredTable(docker)}
      />
      <LiveTable
        title="runc"
        ms={FETCH_RATE_FOR_VERSION}
        check={getRuncTable(docker)}
      />
      <LiveTable
        title="docker-init"
        ms={FETCH_RATE_FOR_VERSION}
        check={getDockerInitTable(docker)}
      />
      <LiveTable
        title="Info"
        ms={FETCH_RATE_FOR_INFO}
        check={getInfoTable(docker)}
      />
    </div>
  );
}
