export default
function Docker(host, port, apiVersion) {

    const data = {};
    const subscribers = [];

    const urlBase = `http://${host}:${port}/v${apiVersion}`;

    function get(path, receiver) {
        fetch(`${urlBase}${path}`)
        .then(response => response.json())
        .then(data => receiver(data))
        .catch(error => receiver(error));
    };

    function saveData(key, value) {
        data[key] = value;
        subscribers.forEach(notify => notify(key, data[key]));
    }

    function getData(key, path) {
        get(path, (response) => saveData(key, response));
    }

    function getAllPaths() {
        getData('ping'       , '/_ping');
        getData('version'    , '/version');
        getData('info'       , '/info');
        getData('containers' , '/containers/json');
        getData('images'     , '/images/json');
        getData('networks'   , '/networks');
        getData('volumes'    , '/volumes');
        getData('swarm'      , '/swarm');
        getData('nodes'      , '/nodes');
        getData('services'   , '/services');
        getData('tasks'      , '/tasks');
        getData('secrets'    , '/secrets');
        getData('configs'    , '/configs');
        getData('plugins'    , '/plugins');
        getData('events'     , '/events');
    }

    function read(key) {
        return data[key];
    }

    function subscribe(notify) {
        subscribers.push(notify);
    }

    function ping(callback) {
        return data['ping']['result'] === 'OK';
    }

    // Fire off all requests
    getAllPaths();

    return { read, subscribe, ping };
};