import React from 'react';
import './App.css'; //create this same file but for CSS

function DisplayQuestion({question}){
    console.log("in function")
    return(
        <div>
            <ans>{question}</ans>
        </div>
    );
}

export default DisplayQuestion;