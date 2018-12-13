import React from 'react';
import '../styles/Game.css';
import Content from './Content';
import ActionBar from "./ActionBar";
import Tips from "./Tips";

export default class Game extends React.Component{

    componentDidMount() {
        this.fetchData()
    }

    fetchData(){
        fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=a3c6bd8e8242dd2b6baa')
            .then(function(response){
                return response.json();
            })
            .then(quizJson =>{
                this.props.onInitQuestions(quizJson);
            })
            .catch(error => console.log('Error extrayendo los datos del servidor.', error));
    }

    render() {
        if(this.props.questions.length === 0){
            return <div>
                <nav className='navBar'><h1>The Quiz Site</h1></nav>
                <div className='msg'><p><b>No hay preguntas.</b></p></div>
            </div>
        } else if (this.props.finished){
            return <div>
                <nav className='navBar'><h1>The Quiz Site</h1></nav>
                <div className='msg'><p><b>Enhorabuena, has acertado {this.props.score} preguntas.</b></p></div>
                <div><button className='backButton' onClick={() => {
                    fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=a3c6bd8e8242dd2b6baa')
                        .then(function(response){
                            return response.json();
                        })
                        .then(quizJson =>{
                            this.props.onReset(quizJson);
                        })
                        .catch(error => console.log('Error extrayendo los datos del servidor.', error));
                    }}>Play again</button>
                </div>
            </div>
        }else {
            return <div>
                <nav className='navBar'><h1>The Quiz Site</h1></nav>

                <Tips
                    className='pistas'
                    question={this.props.questions[this.props.currentQuestion]}
                    currentQuestion={this.props.currentQuestion}
                />

                <Content
                    question={this.props.questions[this.props.currentQuestion]}
                    currentQuestion={this.props.currentQuestion}
                    score={this.props.score}
                    finished={this.props.finished}
                    questions={this.props.questions}
                    ContentQuestionAnswer={(answer) => {
                        this.props.onQuestionAnswer(answer)
                    }}
                />

                <ActionBar
                    question={this.props.questions[this.props.currentQuestion]}
                    currentQuestion={this.props.currentQuestion}
                    score={this.props.score}
                    finished={this.props.finished}
                    questions={this.props.questions}
                    ABChangeQuestion={(actualQuestion) => {
                        this.props.onChangeQuestion(actualQuestion)
                    }}
                    ABSubmit={(questions) => {
                        this.props.onSubmit(questions)
                    }}
                />
            </div>;
        }
    }
}