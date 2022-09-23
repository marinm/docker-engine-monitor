import Docker from './Docker.js';
import config from '../config.js';

const {
    HOST,
    PORT,
    API_VERSION,
} = config;

export default
function canReachDocker(callback) {
    const docker = Docker(HOST, PORT, API_VERSION);

    docker.ping( (result) => callback(result?.result === 'OK' ? true : false));
    return;
}