import "../../css/Header.css";
import * as React from "react";

type Props = {
  panelName: string;
  setPanelName(value: string): void;
};

const panels = [
  ["monitor", "Monitor"],
  ["engine", "Engine"],
  ["containers", "Containers"],
  ["networks", "Networks"],
  ["volumes", "Volumes"],
  ["images", "Images"],
];

export default function Header({ panelName, setPanelName }: Props) {
  function selected(name: string) {
    return name === panelName ? "selected" : "";
  }

  return (
    <div className="Header">
      <div className="layout-box">
        <ul className="tab-bar">
          {panels.map(([name, label]) => (
            <li
              key={name}
              className={selected(name)}
              onClick={() => setPanelName(name)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
