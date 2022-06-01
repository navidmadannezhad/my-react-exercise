import Timer from "./Timer";
import TestTimer from "./TestTimer";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_questions } from "../action/index";

const QuestionBox = (props) => {

    useEffect(() => {
        props.get_questions();
        setTimeout(() => {
            console.log("this"+props.questions);
        });
    }, []);

    return (
        <div className="questionbox-component border-bottom p-4">
            <div className="box-header text-center">
                <div className="message mb-2">
                    Answer these questions carefully and also, pay attention to the timer!
                </div>
                <Timer />
            </div>

            <div className="box-main p-4">

            </div>
        </div>
    )
}


const mapActionsToProps = {
    get_questions
};

const mapStatesToProps = state => {
    return {
        questions: state.questions
    }
};

export default connect(mapStatesToProps, mapActionsToProps)(QuestionBox);