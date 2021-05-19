import "./App.css";

function Score(props) {
    return (
        <div>
            {props.scores.map((scores) => (
                <li>
                    Date: {scores.date} <br /> Score: {scores.score}
                </li>
            ))}
        </div>
    );
    
}

export default Score;