const initalState = {

    counter: 0
}

const reducer = (state = initalState, action) => {
    
    if(action.type === 'INCREMENT_COUNTER'){
        return {
            counter: state.counter + action.val
        }
    } 
    return state;
};

export default reducer;