import Timer from "./Timer";
import TestTimer from "./TestTimer";

const QuestionBox = () => {

    console.log("question box rendered");

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

export default QuestionBox;