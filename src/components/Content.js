import React from 'react';

export default class Content extends React.Component{
    render(){
            return<div>
                {console.log(this.props.questions[this.props.currentQuestion])}
                <div><img className='imagen' src={this.props.question.attachment.url} alt='img' width='400'
                          height='400'/></div>
                <div>
                    <div className='question'><b>{this.props.question.question}</b></div>
                    <div className='answer'><input className='entrada' type={"text"} value={this.props.question.userAnswer || ''} onChange={(e) => {
                        this.props.onQuestionAnswer(e.target.value);
                    }}/>
                    </div>
                </div>
            </div>
    }
}