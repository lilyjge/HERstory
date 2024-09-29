import './App.css';
import axios from "axios";
import DisplayQuestion from "./question"
import DisplayAnswer from "./answer"
import AllChoices from "./Choice";
import Counter from "./Counter";
import Next from './Next';
import { useState } from 'react';

// const makeCall = () => {
//   axios.get('http://localhost:8000').then((data) => {
//     //this console.log will be in our frontend console
//     console.log(data)
//   })
// }

let index = Math.floor(Math.random() * 50);
var question = await axios.get(`http://localhost:8000/questions/${index}`);

// <h1></h1> declares a react fragment, allowing you to print something else
function App() {
  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(Math.floor(Math.random() * 10));
  const [key, setKey] = useState(0);
  const [solved, setSolved] = useState(false);
  async function updateScore(score) {
    await setCounter(counter + score);
    // console.log("score: " + score);
    // console.log("counter: " + counter)
    await setSolved(true);
  }

  async function refresh() {
    await setIndex(Math.floor(Math.random() * 50));
    question = await axios.get(`http://localhost:8000/questions/${index}`);
    await setKey(key + 1);
    // this.forceUpdate();
    await setSolved(false);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="card" style={{ width: "100%" }}>
          <div className="m-2 px-5 p-5">
            <h1 className="card-title">
              <Counter cnt={counter}></Counter>
            </h1>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="container">
          {/* First Row with Two Equal Columns */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-6">
              <div className="card" style={{ width: "100%" }}>
                <div className="m-2 px-5 p-5">
                  <h2 className="card-title">
                    <DisplayQuestion question={question.data.question} />
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="options">
                <AllChoices op={question.data.options} ans={question.data.answer} updateScore={updateScore} key={key} />
              </div>
            </div>
          </div>

          {/* Second Row with One Full-Width Column */}
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="card" style={{ width: "100%" }}>
                <div className="m-3 p-3">
                  <h5 className="card-title"><DisplayAnswer ans={question.data.summary} solved={solved} className="correctAnswer"></DisplayAnswer></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
