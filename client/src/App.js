import './App.css';
import axios from "axios";

const makeCall = () => {
  axios.get('http://localhost:8000').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

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
