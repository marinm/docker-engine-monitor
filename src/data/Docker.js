export default
function Docker(host, port, apiVersion) {

    const urlBase = `http://${host}:${port}/v${apiVersion}`;

    function get(path, receiver) {
        fetch(`${urlBase}${path}`)
        .then(response => response.json())
        .then(data => receiver(data))
        .catch(error => receiver(null));
    };

    function getterFunction(path) {
        return (receiver) => get(path, receiver);
    }

    return {
        ping       : getterFunction('/_ping'),
        version    : getterFunction('/version'),
        info       : getterFunction('/info'),
        containers : getterFunction('/containers/json?all=1'),
        images     : getterFunction('/images/json?all=1'),
        networks   : getterFunction('/networks'),
        volumes    : getterFunction('/volumes'),
        swarm      : getterFunction('/swarm'),
        nodes      : getterFunction('/nodes'),
        services   : getterFunction('/services'),
        tasks      : getterFunction('/tasks'),
        secrets    : getterFunction('/secrets'),
        configs    : getterFunction('/configs'),
        plugins    : getterFunction('/plugins'),
        events     : getterFunction('/events'),
    };
};