import React from 'react';
import './App.css';
import axios from "axios";
import DisplayAnswer from "./answer";
// import MakeBackground from "./homepage";   
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; 
import Home from "./Home";
import Login from "./Login"; 
import Game from "./Game"; 
import Welcome from "./Welcome"; 

const makeCall = () => {
  axios.get('http://localhost:8000').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

function App() {
  return (
    <> 
    <div className="App">
      <header>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Game />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
