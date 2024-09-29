import React from 'react';
import './App.css'; //create this same file but for CSS

function DisplayAnswer({ans, solved}){
    // console.log("in function")
    if(!solved) return null;
    else return(
        <div>
            <p>{ans}</p>
        </div>
    );
}

export default DisplayAnswer;