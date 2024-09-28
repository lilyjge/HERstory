import React from 'react';
import './App.css'; //create this same file but for CSS

function DisplayQuestion({question}){
    // console.log("in function")
    return(
        <div>
            <p>{question}</p>
        </div>
    );
}

export default DisplayQuestion;