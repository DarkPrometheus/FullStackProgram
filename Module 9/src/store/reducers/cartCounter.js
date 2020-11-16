const cartCounterRecuder = (state = 0, action) => {
    if (action.type === "INCREMENT_COUNTER") {
        return state + 1
    }
    return state;
};

export default cartCounterRecuder;