import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import womenbackground from './womenbackground.jpg';
import logo from './logo.png'; 
import './App.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function MakeBackground() {
    return (
        <div className ="website-homepage">
            <img src = {womenbackground} alt = "we are in this together" className = "background-image"/>
            <img src = {logo} alt = "This is our logo" className = "overlay-image"/>
            <div className = "text-overlay">
                <h1> WEBSITE NAME </h1>
            </div>
            <div className = "start-button">
                <a href = "/login">
                <button type="button" class="btn btn-primary btn-lg" > Sign Up </button>
                </a>
            </div>
        </div>
    );
}

const Home = () => {
    return(
        <div>
            <MakeBackground></MakeBackground>
        </div>
    ) 
  };
  
  export default Home;