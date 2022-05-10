const initialState = {
    system_temperature: 0
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case "INCREASE_TEMP":
            return {
                system_temperature: state.system_temperature + 1
            }
            break;
        case "DECREASE_TEMP":
            return {
                system_temperature: state.system_temperature - 1
            }
            break;
        default:
            return state;
    }
};

export default reducer;
