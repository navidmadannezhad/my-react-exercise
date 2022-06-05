import { Form, Button } from 'react-bootstrap';
import { useState } from "react";

const QuestionBox = props => {

    const [selectedAnswerState, setSelectedAnswerState] = useState();

    return (
        <div className="question-component">
            {
                !props.answered && props.question && (
                    <div className="box-main not-answered p-4">
                        <div className="question">
                            <span>{props.question.number}. </span>
                            <span>{props.question.question}</span>
                        </div>
                        <div className="options mt-3">
                            <Form>
                                {
                                    props.question.answers.map(answer => (
                                        <Form.Check
                                            type="radio"
                                            label={answer.text}
                                            name="answer"
                                            key={answer.text}
                                            onClick={() => { setSelectedAnswerState(answer.state) }}
                                            className="ps-5 pt-1 pb-1 m-1 rounded"
                                        />
                                    ))
                                }
                            </Form>
                        </div>
                        <div className="w-100 text-center">
                            <Button onClick={ () => { props.checkAnswer(selectedAnswerState) } }>Result</Button>
                        </div>
                    </div>
                )
            }

            {
                props.answered && props.question && (
                    <div className="box-main not-answered p-4">
                        <div className="question">
                            <span>{props.question.number}. </span>
                            <span>{props.question.question}</span>
                        </div>
                        <div className="options mt-3">
                            <Form>
                                {
                                    props.question.answers.map(answer => (
                                        <Form.Check
                                            disabled
                                            type="radio"
                                            label={answer.text}
                                            name="answer"
                                            key={answer.text}

                                            className={`ps-5 pt-1 pb-1 m-1 rounded ${ answer.state ? "bg-success" : "bg-danger" }`}
                                        />
                                    ))
                                }
                            </Form>
                        </div>
                        <div className="w-100 text-center">
                            <Button onClick={() => { props.activateNextQuestion() }}>Next Qusestion!</Button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default QuestionBox;