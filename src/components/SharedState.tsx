export default
function sharedState(init :any) {
    let state = init;
    return {
        get: () => state,
        set: (value :any) => state = value
    };
};