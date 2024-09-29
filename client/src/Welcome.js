import welcome_background from './welcome_background.png';
import logo from './logo.png';
import './App.css';
import axios from "axios";
import { withAuthInfo } from '@propelauth/react';

function ReturnHighest({highScore}) {
    return(
        <p className = "score">
            Your current highest score is: {highScore}
        </p>
    )
}

const Welcome = withAuthInfo((props) => {

    // Function to send email to the backend
    const handleSendEmail = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/sendEmail", {
                email: props.user.email
            });
            console.log('Email sent to backend successfully:', response.data);
        } catch (error) {
            console.error('Error sending email to backend:', error);
        }
    }
    // isLoggedIn and user are injected automatically from withAuthInfo
    if (props.isLoggedIn) {
        handleSendEmail();
    }

    return (
        <>
            <div className ="website-homepage">
            <img src = {welcome_background} alt = "we are in this together" className = "background-image"/>
            <img src = {logo} alt = "This is our logo" className = "welcome-image"/>
            <h1 className = "welcome-overlay">
                Welcome to HERstory!
            </h1>
            <div className = "score-overlay">
                <ReturnHighest highScore={2}></ReturnHighest>
            </div>
            <div className = "start-button">
                <a href = "/game">
                <button type="button" class="btn btn-primary btn-lg" > Start! </button>
                </a>
            </div>
        </div>
        </>
    )
  });
  
  export default Welcome;