import Score from "./Score";
import "./App.css";

function Student(props) {
    return (
        <div>
            {props.students.map((stud) => (
                <div>
                    Name: {stud.name}
                    <br />
                    
                    Bio: {stud.bio}
                    <Score scores={stud.scores} />
                </div>
            ))}
        </div>
    );
}

export default Student;