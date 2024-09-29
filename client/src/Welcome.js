import welcome_background from './welcome_background.png';
import logo from './logo.png';
import './App.css';
import axios from "axios";
import { withAuthInfo } from '@propelauth/react';
import { useState } from 'react';
import { Link } from "react-router-dom";

function ReturnHighest({highScore}) {
    return(
        <p className = "score">
            Your current highest score is: {highScore}
        </p>
    )
}

const Welcome = withAuthInfo((props) => {
    const [email, setEmail] = useState();
    const [score, setScore] = useState();
    // Function to send email to the backend
    const handleSendEmail = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/sendEmail", {
                email: props.user.email
            });
            console.log('Email sent to backend successfully:', response.data);
            setEmail(response.data);
        } catch (error) {
            console.error('Error sending email to backend:', error);
        }
    }
    // isLoggedIn and user are injected automatically from withAuthInfo
    if (props.isLoggedIn) {
        handleSendEmail();
    }

    // var score;
    async function getScore(){
        var t = await axios.get(`http://localhost:8000/api/getScore/${props.user.email}`);
        await setScore(t.data.score);
    }
    getScore();

    return (
        <>
            <div className ="website-homepage">
            <img src = {logo} alt = "This is our logo" className = "welcome-image"/>
            <h1 className = "welcome-overlay">
                WELCOME TO
            </h1>
            <div className = "score-overlay">
                <ReturnHighest highScore={score}></ReturnHighest>
            </div>
            <div className = "start-button">
                {/* <a href = "/game"> */}
                <Link to="/game" state={{email: {email}}}>
                <button type="button" class="btn btn-primary btn-lg" > Start! </button>
                </Link>
                {/* </a> */}
            </div>
        </div>
        </>
    )
  });
  export default Welcome;