import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";

let index = Math.floor(Math.random() * 10);
var q = await axios.get(`http://localhost:8000/questions/${index}`);

function Choice({option, checkAns, isDisabled}) {
    return (
        <div>
            <button onClick={() =>{checkAns(option)}} disabled={isDisabled}>{option}</button>
        </div>
    )
}

function AllChoices() {
    const [isDisabled, setDisabled] = useState(false);
    const [isCorrect, setCorrect] = useState(false);
    console.log(q);
    const op = q.data.options;
    console.log(op);

    function checkAns(option){
        setCorrect(option === q.data.answer);
        console.log(isCorrect);
        setDisabled(true);
    }

    return (
        <div>
            <Choice option={op[0]} checkAns={checkAns} isDisabled={isDisabled}></Choice>
            <Choice option={op[1]} checkAns={checkAns} isDisabled={isDisabled}></Choice>
            <Choice option={op[2]} checkAns={checkAns} isDisabled={isDisabled}></Choice>
            <Choice option={op[3]} checkAns={checkAns} isDisabled={isDisabled}></Choice>
        </div>
    );
}

export default AllChoices;