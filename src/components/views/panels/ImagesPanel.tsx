import * as React from "react";
import LiveTables from "../../common/LiveTables";
import { Docker } from "../../../data/Docker";
import config from "../../../config";
import tables from "../../../adapters/table-mapper";

const { HOST, PORT, API_VERSION, FETCH_RATE_FOR_IMAGES } = config;

const { get_images_tables } = tables;

export default function ImagesPanel() {
  const docker = Docker(HOST, PORT, API_VERSION);

  return (
    <div className="panel images-panel">
      <LiveTables
        check={get_images_tables(docker)}
        ms={FETCH_RATE_FOR_IMAGES}
      />
    </div>
  );
}
