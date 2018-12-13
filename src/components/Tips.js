import React from 'react';

export default class Tips extends React.Component {
    render() {
        return <div className='tips'>
            <h2 className='tipsTitle'>Pistas</h2>
            <div id='tipsText'>{ this.props.question !== undefined ? (this.props.question.tips.length !== 0 ?
                this.props.question.tips.map( (string) => {return <div>{string}</div>}): "No tips available" ) : "No tips available"}</div>
            <button className='showButton' onClick={()=>
            {document.getElementById('tipsText').style.display = 'block';}}>Mostrar</button>
        </div>
    }

    }