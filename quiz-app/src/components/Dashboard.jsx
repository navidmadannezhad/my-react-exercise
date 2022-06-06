import Timer from "./Timer";
import TestTimer from "./TestTimer";
import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { get_questions, increase_score, decrease_score, reset_score } from "../redux/action/index";
import QuestionBox from "./QuestionBox";
import GameFinishedBox from "./GameFinishedBox";

const Dashboard = (props) => {
    const timerRef = useRef();

    const [answered, setAnswered] = useState(false);
    const [gameIsFinished, setFinishState] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [timeDone, setTimeDone] = useState(false);

    const resetGame = () => {
        setFinishState(false);
        props.reset_score();
        setAnswered(false);
        setActiveQuestion(0);
        timerRef.current.reset();
    }

    const activateNextQuestion = () => {
        setAnswered(false);
        if(activeQuestion != props.questions.length -1){
            setActiveQuestion(activeQuestion => {
                return activeQuestion + 1;
            });
        }
        else{
            setFinishState(true);
        }
    }

    const checkAnswer = (selectedAnswerState) => {
        setAnswered(true);
        selectedAnswerState ? props.increase_score() : props.decrease_score();
    }

    useEffect(() => {
        props.get_questions();
    }, []);

    return (
        <div className="dashboard-component border-bottom p-4">
            <div className="box-header text-center">
                <div className="message mb-2">
                    Answer these questions carefully and also, pay attention to the timer!
                </div>
                <Timer 
                    ref={timerRef}

                    setTimeDone={setTimeDone}
                    timeDone={timeDone}
                    setFinishState={setFinishState}
                    gameIsFinished={gameIsFinished}
                />
            </div>

            {
                !gameIsFinished && (
                    <QuestionBox 
                        answered={answered} 
                        question={props.questions[activeQuestion]} 
                        setAnswered={setAnswered} 
                        activateNextQuestion={activateNextQuestion}
                        checkAnswer={checkAnswer}
                    />
                )
            }

            {
                gameIsFinished && (
                    <GameFinishedBox
                        timeFinished={timeDone}
                        resetGame={resetGame}
                    />
                )
            }

        </div>
    )
}


const mapActionsToProps = {
    get_questions,
    increase_score,
    decrease_score,
    reset_score
};

const mapStatesToProps = state => {
    return {
        questions: state.questions,
        score: state.score
    }
};

export default connect(mapStatesToProps, mapActionsToProps)(Dashboard);