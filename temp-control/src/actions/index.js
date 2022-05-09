const change_temperature = payload => { 
    return { 
        type: "CAHNGE_TEMPERATURE", 
        payload: payload
    }
};

export { change_temperature };