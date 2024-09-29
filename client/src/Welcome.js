import welcome_background from './welcome_background.png';
import logo from './logo.png'; 

function ReturnHighest({highScore}) {
    return(
        <p className = "score">
            Your current highest score is: {highScore}
        </p>
    )
}

const Welcome = () => {
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
  };
  
  export default Welcome;