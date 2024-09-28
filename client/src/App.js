import './App.css';
// import axios from "axios";
import DisplayQuestion from "./question"
import DisplayAnswer from "./answer"
import Choice from "./Choice";

// const makeCall = () => {
//   axios.get('http://localhost:8000').then((data) => {
//     //this console.log will be in our frontend console
//     console.log(data)
//   })
// }


// <h1></h1> declares a react fragment, allowing you to print something else
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={makeCall}>Click</button>
      </header>
    </div>
  );
}

export default App;
