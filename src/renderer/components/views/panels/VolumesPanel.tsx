import * as React from "react";
import LiveTables from "../../common/LiveTables";
import { Docker } from "../../../data/Docker";
import config from "../../../config";
import { getVolumesTables } from "../../../adapters/table-mapper";

const { HOST, PORT, API_VERSION, FETCH_RATE_FOR_VOLUMES } = config;

export default function VolumesPanel() {
  const docker = Docker(HOST, PORT, API_VERSION);

  return (
    <div className="panel volumes-panel">
      <LiveTables
        check={getVolumesTables(docker)}
        ms={FETCH_RATE_FOR_VOLUMES}
      />
    </div>
  );
}
