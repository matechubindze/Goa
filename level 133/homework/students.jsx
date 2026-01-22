import { useContext } from "react";
import { StudentsContext } from "../context/StudentsContext";

const Students = () => {
    const students = useContext(StudentsContext);

    return (
        <div>
        {students.map((student, index) => (
            <p key={index}>{student}</p>
        ))}
        </div>
    );
};

export default Students;

