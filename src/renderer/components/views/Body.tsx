import "../../css/Body.css";
import * as React from "react";
import MonitorPanel from "./panels/MonitorPanel";
import EnginePanel from "./panels/EnginePanel";
import ContainersPanel from "./panels/ContainersPanel";
import NetworksPanel from "./panels/NetworksPanel";
import VolumesPanel from "./panels/VolumesPanel";
import ImagesPanel from "./panels/ImagesPanel";

type Props = {
  panelName: string;
};

export default function Body({ panelName }: Props) {
  const components: any = {
    monitor: <MonitorPanel />,
    engine: <EnginePanel />,
    containers: <ContainersPanel />,
    networks: <NetworksPanel />,
    volumes: <VolumesPanel />,
    images: <ImagesPanel />,
  };

  return <div className="Body">{components[panelName]}</div>;
}
