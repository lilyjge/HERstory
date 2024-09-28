import './App.css';
// import axios from "axios";
import Choice from "./Choice";

// const makeCall = () => {
//   axios.get('http://localhost:8000').then((data) => {
//     //this console.log will be in our frontend console
//     console.log(data)
//   })
// }


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Choice></Choice>
      </header>
    </div>
  );
}

export default App;
