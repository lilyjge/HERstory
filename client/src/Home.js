import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import womenbackground from './home_background.jpg';
import logo from './logo.png'; 
import './App.css'; 
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function MakeBackground() {
    return (
        <div className ="website-homepage">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <img src = {womenbackground} alt = "we are in this together" className = "background-image"/>
            <img src = {logo} alt = "This is our logo" className = "overlay-image"/>
            <div className = "start-button">
                <a href = "https://2912938.propelauthtest.com/en/login">
                <button type="button" class="btn btn-primary btn-lg" > Sign Up </button>
                </a>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
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