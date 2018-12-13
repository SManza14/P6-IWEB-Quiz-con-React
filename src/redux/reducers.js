import {combineReducers} from 'redux';
import {CHANGE_QUESTION, INIT_QUESTIONS, QUESTION_ANSWER, RESET, SUBMIT} from './actions';

function score(state = 0, action = {}){
    switch(action.type){
        case SUBMIT:
            let points = 0;
            for (let i=0; i < action.questions.length; i++){
                if (action.questions[i].answer === action.questions[i].userAnswer) {
                    points = points + 1;
                }
            }
            let newState = JSON.parse(JSON.stringify(state));
            newState = points;
            return newState;
        case RESET:
            return score(0);
        default:
            return state;
    }
}

function finished(state = false, action = {}){
    switch(action.type){
        case SUBMIT:
            return finished(true);
        case RESET:
            return finished(false);
        default:
            return state;
    }
}
function currentQuestion(state = 0, action = {}){
    switch(action.type){
        case CHANGE_QUESTION:
            return action.currentQuestion;
        default:
            return state;
    }
}
function questions(state = 0, action = {}){
    switch(action.type){
        case QUESTION_ANSWER:
            return state.map((question,i) => {
                return { ...question,
                            userAnswer : action.payload.index === i ?
                                action.payload.answer : question.userAnswer}
            });
        case INIT_QUESTIONS:
            return action.questions;
        case RESET:
            return action.questions;
        default:
            return state;
    }
}


const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState;