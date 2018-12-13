import React from 'react';

export default class ActionBar extends React.Component {
    render() {
        let disabledPrevious = this.props.currentQuestion === 0;
        let disabledNext = this.props.currentQuestion === this.props.questions.length -1;
        return<div className='actionBar'>
            <button className='boton' disabled={disabledPrevious} onClick={() => {
                this.props.ABChangeQuestion(this.props.currentQuestion - 1)
                document.getElementById('tipsText').style.display = 'none';
            }}>« Previous
            </button>
            <button className='boton' disabled={disabledNext} onClick={() => {
                this.props.ABChangeQuestion(this.props.currentQuestion + 1)
                document.getElementById('tipsText').style.display = 'none';
            }}>Next »
            </button>
            <button className='boton' onClick={() => {
                this.props.ABSubmit(this.props.questions)
            }}>Submit ✓
            </button>
        </div>

    }
}