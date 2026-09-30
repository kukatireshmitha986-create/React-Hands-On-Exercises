import { useState } from "react";
import "./StudentMarks.css";

function StudentMarks({ name, subject }) {
  const [marks, setMarks] = useState(50);

  const increaseMarks = () => {
    setMarks(marks + 5);
  };

  const decreaseMarks = () => {
    setMarks(marks - 5);
  };

  return (
    <div className="marks-card">
      <h2>Student Marks</h2>

      <p>
        <strong>Student Name:</strong> {name}
      </p>

      <p>
        <strong>Subject:</strong> {subject}
      </p>

      <p>
        <strong>Marks:</strong> {marks}
      </p>

      <div className="marks-buttons">
        <button onClick={increaseMarks}>Increase Marks</button>

        <button onClick={decreaseMarks}>Decrease Marks</button>
      </div>
    </div>
  );
}

export default StudentMarks;