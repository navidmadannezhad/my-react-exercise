import { httpClient } from "../http/http";

const GET_QUESTIONS_URL = "../../public/questions.json";

const get_questions = () => async (dispatch) => {
    let questions = await httpClient(GET_QUESTIONS_URL);
    dispatch({
        type: "GET_QUESTIONS",
        payload: questions.data
    })
};

const increase_score = () => async (dispatch) => {
    dispatch({
        type: "INCREASE_SCORE",
    })
};

const decrease_score = () => async (dispatch) => {
    dispatch({
        type: "DECREASE_SCORE",
    })
};

export { get_questions, increase_score, decrease_score };