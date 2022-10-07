import * as React from "react";
import LiveTables from "../../common/LiveTables";
import { Docker } from "../../../data/Docker";
import config from "../../../config";
import { getImagesTables } from "../../../adapters/table-mapper";

const { HOST, PORT, API_VERSION, FETCH_RATE_FOR_IMAGES } = config;

export default function ImagesPanel() {
  const docker = Docker(HOST, PORT, API_VERSION);

  return (
    <div className="panel images-panel">
      <LiveTables check={getImagesTables(docker)} ms={FETCH_RATE_FOR_IMAGES} />
    </div>
  );
}
