import React, { Component } from 'react';
import './styles/App.css';
import { connect } from 'react-redux';
import Game from './components/Game';
import {changeQuestion, initQuestions, questionAnswer, submit, reset} from "./redux/actions";

class App extends Component {
  render() {
    console.log(this.props.questions);
    return <div>
        <Game question={this.props.questions[this.props.currentQuestion]}
              currentQuestion={this.props.currentQuestion}
              score={this.props.score}
              finished={this.props.finished}
              questions={this.props.questions}
              onQuestionAnswer={(answer) => {
                  this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
              }}
              onChangeQuestion={(actualQuestion) => {
                  this.props.dispatch(changeQuestion(actualQuestion))
              }}
              onSubmit={(questions) => {
                  this.props.dispatch(submit(questions))
              }}
              onInitQuestions={(questions) =>{
                  this.props.dispatch(initQuestions(questions))
              }}
              onReset={(questions) => {
                  this.props.dispatch(reset(questions))
              }}
        />
        {console.log(this.props.questions[this.props.currentQuestion])}
        {console.log(this.props.finished)}
        {console.log(this.props.score)}
    </div>;
  }
}


function mapStateToProps(state){
  return{
    ...state
  }
}
export default connect(mapStateToProps)(App);
