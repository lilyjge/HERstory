// import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";

function Choice({option, checkAns, isDisabled}) {
    return (
        <div>
            <button onClick={() =>{checkAns(option)}} disabled={isDisabled}>{option}</button>
        </div>
    )
}

function AllChoices({op, ans, updateScore}) {
    const [isDisabled, setDisabled] = useState(false);
    const [isCorrect, setCorrect] = useState(false);

    // console.log(q);
    // const op = q.data.options;
    // console.log(op);
    // console.log("in fun");
    async function checkAns(option){
        await setCorrect(option === ans);
        // console.log(isCorrect);
        await setDisabled(true);
        await updateScore(option === ans);
        // console.log(isCorrect);
    }

    // useEffect(() => console.log(isCorrect), [isCorrect]);

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