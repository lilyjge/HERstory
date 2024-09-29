import './App.css';
import axios from "axios";
import { withAuthInfo } from '@propelauth/react';

const App = withAuthInfo((props) => {

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
        // Trigger the send email function when the user is logged in
        handleSendEmail();

        return <p>You are logged in as {props.user.email}</p>;
    } else {
        return <p>You are not logged in</p>;
    }
});

export default App;