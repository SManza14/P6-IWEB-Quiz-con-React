export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';
export const RESET = 'RESET';


export function questionAnswer(index, answer){
    return {type: QUESTION_ANSWER, payload: {index, answer}};
}

export function changeQuestion(currentQuestion){
    return {type: CHANGE_QUESTION, currentQuestion}
}

export function submit(questions){
    return {type: SUBMIT, questions}
}

export function initQuestions(questions){
    return {type: INIT_QUESTIONS, questions}
}

export function reset(questions){
    return {type: RESET, questions}
}
