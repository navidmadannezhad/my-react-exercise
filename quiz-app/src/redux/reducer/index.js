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
            return {
                ...state,
                score: state.score + 1
            }
            break;

        case "DECREASE_SCORE":
            return state;
            break;

        case "RESET_SCORE":
            return {
                ...state,
                score: 0
            }
            
        default:
            return state;
    }
}

export default rootReducer;

