// import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";

function Choice({ option, checkAns, isDisabled }) {
    return (
        <div className="d-grid col-12 p-2 mx-auto">
            <button className="btn btn-light btn-lg" type="button" onClick={() => { checkAns(option) }} disabled={isDisabled}>{option}</button>
        </div>
    )
}

function AllChoices({op, ans, updateScore}) {
    const [isDisabled, setDisabled] = useState(false);
    const [isCorrect, setCorrect] = useState(false);

    async function checkAns(option){
        await setCorrect(option === ans);
        await setDisabled(true);
        await updateScore(option === ans);
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