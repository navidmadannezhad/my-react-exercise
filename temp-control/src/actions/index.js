const increaseTemp = () => {
    return {
        type: "INCREASE_TEMP"
    }
}

const decreaseTemp = () => {
    return {
        type: "DECREASE_TEMP"
    }
}

export { increaseTemp, decreaseTemp };