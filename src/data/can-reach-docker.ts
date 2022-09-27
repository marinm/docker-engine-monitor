import {Docker} from './Docker.js';
import config from '../config.js';

const {
    HOST,
    PORT,
    API_VERSION,
} = config;

export default
function canReachDocker(callback : (result: boolean) => void) {
    const docker = Docker(HOST, PORT, API_VERSION);

    docker.ping( (result :any) => callback(result?.result === 'OK' ? true : false));
    return;
}