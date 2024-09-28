import './App.css';
import axios from "axios";
import DisplayQuestion from "./question"
import DisplayAnswer from "./answer"
import AllChoices from "./Choice";
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
  function updateScore(){
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <DisplayQuestion question={question.data.question}></DisplayQuestion>
        <DisplayAnswer ans={question.data.answer}></DisplayAnswer>
        <AllChoices op={question.data.options} ans={question.data.answer} updateScore={updateScore}></AllChoices>
      </header>
    </div>
  );
}

export default App;
