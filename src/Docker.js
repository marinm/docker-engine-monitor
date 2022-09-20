export default
function Docker(host, port, api_version) {
    return function(path, receiver) {
        fetch(`http://${host}:${port}/v${api_version}${path}`)
        .then(response => response.json())
        .then(data => receiver(data))
        .catch(error => receiver(error));
    };
};