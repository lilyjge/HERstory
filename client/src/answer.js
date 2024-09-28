import React from 'react';
import './App.css'; //create this same file but for CSS

function DisplayAnswer({ans}){
    console.log("in function")
    return(
        <div>
            <p>{ans}</p>
        </div>
    );
}

export default DisplayAnswer;