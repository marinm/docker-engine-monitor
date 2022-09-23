export default
function sharedState(init) {
    let state = init;
    return {
        get: () => state,
        set: (value) => state = value
    };
};