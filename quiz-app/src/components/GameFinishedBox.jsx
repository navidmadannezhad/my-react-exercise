import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const GameFinishedBox = props => {

    return (
        <div className="game-finished-component">
            <div className="box-main not-answered p-4">
                <div className="w-100 text-center">
                    <span>Game Finished!</span>
                    <br />

                    {
                        props.timeFinished && (
                            <span>
                                by: Time end
                            </span>
                        )
                    }
                    {
                        !props.timeFinished && (
                            <span>
                                by: All questions answered
                            </span>
                        )
                    }
                    
                </div>
                <div className="options mt-3 text-center">
                    <span>YOUR SCORE:</span>
                    <br/>
                    <span>{props.score}/5</span>
                </div>

                <div className="w-100 text-center mt-3">
                    <Button onClick={ () => { props.resetGame(); } }>Start Again!</Button>
                </div>
            </div>
        </div>
    )
}

const mapStatesToProps = state => {
    return {
        score: state.score
    }
}

export default connect(mapStatesToProps, {})(GameFinishedBox);