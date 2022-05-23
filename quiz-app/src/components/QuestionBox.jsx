import Timer from "./Timer";

const QuestionBox = () => {

    

    return (
        <div className="questionbox-component border-bottom">
            <div className="box-header p-4 text-center">
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