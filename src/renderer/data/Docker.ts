import { Receiver, Getter } from "../hooks/useTimeoutGet.js";

type DockerModel = {
  ping: Getter;
  version: Getter;
  info: Getter;
  containers: Getter;
  images: Getter;
  networks: Getter;
  volumes: Getter;
  swarm: Getter;
  nodes: Getter;
  services: Getter;
  tasks: Getter;
  secrets: Getter;
  configs: Getter;
  plugins: Getter;
  events: Getter;
};

function Docker(host: string, port: string, apiVersion: string): DockerModel {
  const urlBase = `http://${host}:${port}/v${apiVersion}`;

  function get(path: string, receiver: Receiver) {
    fetch(`${urlBase}${path}`)
      .then((response) => response.json())
      .then((data: any) => receiver(data))
      .catch((error) => receiver(null));
  }

  function getterFunction(path: string): Getter {
    return (receiver: Receiver) => get(path, receiver);
  }

  return {
    ping: getterFunction("/_ping"),
    version: getterFunction("/version"),
    info: getterFunction("/info"),
    containers: getterFunction("/containers/json?all=1"),
    images: getterFunction("/images/json?all=1"),
    networks: getterFunction("/networks"),
    volumes: getterFunction("/volumes"),
    swarm: getterFunction("/swarm"),
    nodes: getterFunction("/nodes"),
    services: getterFunction("/services"),
    tasks: getterFunction("/tasks"),
    secrets: getterFunction("/secrets"),
    configs: getterFunction("/configs"),
    plugins: getterFunction("/plugins"),
    events: getterFunction("/events"),
  };
}

export { DockerModel, Docker };
