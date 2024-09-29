import axios from "axios";
import { Link } from "react-router-dom";

function Exit({score, email}) {
    async function setScore() {
        const e = email.email;
        console.log(e);
        console.log(score);
        await axios.put(`http://localhost:8000/api/updateScore/${e}/${score}`, {e, score});
    }
    return (
        <div>
            <Link to="/welcome" onClick={setScore}>Exit</Link>
        </div>
    )
}

export default Exit;