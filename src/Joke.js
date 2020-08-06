import React from 'react'

function Joke(props){
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h4 style={{color: !props.question && "#009999"}}>Punchline: {props.punchline}</h4>
            <hr />
        </div>
    )
}

export default Joke