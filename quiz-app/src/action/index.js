import { httpClient } from "../http/http";

const GET_QUESTIONS_URL = "../../public/questions.json";

const get_questions = async () => {
    let questions = await httpClient(GET_QUESTIONS_URL);
    return {
        type: "GET_QUESTIONS",
        payload: questions.data
    }
};


export { get_questions };