import './App.css';
import axios from "axios";
import DisplayQuestion from "./question"
import DisplayAnswer from "./answer"
import AllChoices from "./Choice";
import Counter from "./Counter";
import Next from './Next';
import Exit from "./Exit";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

let index = Math.floor(Math.random() * 42);
var question = await axios.get(`http://localhost:8000/questions/${index}`);

const Game = () => {
    const [counter, setCounter] = useState(0);
    const [index, setIndex] = useState(Math.floor(Math.random() * 42));
    const [key, setKey] = useState(0);
    const [solved, setSolved] = useState(false);
    const location = useLocation();
    const {email} = location.state;
    // console.log(email);
    async function updateScore(score) {
      await setCounter(counter + score);
      // console.log("score: " + score);
      // console.log("counter: " + counter)
      await setSolved(true);
    }
  
    async function refresh() {
      await setIndex(Math.floor(Math.random() * 42));
      question = await axios.get(`http://localhost:8000/questions/${index}`);
      await setKey(key + 1);
      // this.forceUpdate();
      await setSolved(false);
    }
  
    return (
      <div className="App"style={{height:"100vh"}}>
        <div className="container">
          <div className="col-md-1">
            <div className="card" style={{ width: "50%" }}>
              <div className="m-1 mt-3">
                <h1 className="fs-6">
                  <Counter cnt={counter}></Counter>
                  <Exit score={counter} email={email}></Exit>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center"style={{height:"80vh"}}>
          <div className="container">
            {/* First Row with Two Equal Columns */}
            <div className="row justify-content-center mb-2">
              <div className="col-md-6">
                <div className="card" style={{ width: "100%" }}>
                  <div className="m-2 px-5 p-5">
                    <h2 className="fs-3">
                      <DisplayQuestion question={question.data.question} />
                    </h2>
                  </div>
                </div>
              </div>
  
              <div className="col-md-6">
                <div className="options">
                  <h3 className="fs-3">
                    <AllChoices op={question.data.options} ans={question.data.answer} updateScore={updateScore} key={key} />
                  </h3>
                </div>
              </div>
            </div>
  
            {/* Second Row with One Full-Width Column */}
            <DisplayAnswer ans={question.data.summary} solved={solved} className="correctAnswer"></DisplayAnswer>
          </div>
        </div>
        <div className="container">
          <div className="col-2">
            <div className="card" style={{ width: "50%" }}>
              <div className="m-1 mt-2">
                <h1 className="fs-6">
                  <Next refresh={refresh} solved={solved}></Next>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Game;