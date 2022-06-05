let initialState = {
    questions: [],
    score: 0
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_QUESTIONS":
            return {
                ...state,
                questions: action.payload
            }
            break;
        case "INCREASE_SCORE":
            console.log("must increase");
            return {
                ...state,
                score: state.score + 1
            }
            break;
        case "DECREASE_SCORE":
            console.log("must decrease");
            return state;
            break;
        default:
            return state;
    }
}

export default rootReducer;

