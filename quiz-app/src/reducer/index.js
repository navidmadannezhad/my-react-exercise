let initialState = {
    questions: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_QUESTIONS":
            return {
                ...state,
                questions: action.payload
            }
            break;
        default:
            // console.log(action.type);
            return state;
    }
}

export default rootReducer;

