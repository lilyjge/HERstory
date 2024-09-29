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

let index = Math.floor(Math.random() * 10);
var question = await axios.get(`http://localhost:8000/questions/${index}`);

// <h1></h1> declares a react fragment, allowing you to print something else
function App() {
  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(Math.floor(Math.random() * 10));
  const [key, setKey] = useState(0);
  const [solved, setSolved] = useState(false);
  async function updateScore(score){
    await setCounter(counter + score);
    // console.log("score: " + score);
    // console.log("counter: " + counter)
    await setSolved(true);
  }

  async function refresh(){
    await setIndex(Math.floor(Math.random() * 50));
    question = await axios.get(`http://localhost:8000/questions/${index}`);
    await setKey(key + 1);
    // this.forceUpdate();
    await setSolved(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Counter cnt={counter}></Counter>
        <DisplayQuestion question={question.data.question}></DisplayQuestion>
        <AllChoices op={question.data.options} ans={question.data.answer} updateScore={updateScore} key={key}></AllChoices>
        <DisplayAnswer ans={question.data.summary} solved={solved}></DisplayAnswer>
        <Next refresh={refresh} solved={solved}></Next>
      </header>
    </div>
  );
}

export default App;
