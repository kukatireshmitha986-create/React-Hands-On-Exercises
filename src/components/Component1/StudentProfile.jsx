import "./StudentProfile.css";

function StudentProfile({ name, rollNo, course, college }) {
  return (
    <div className="profile-card">
      <h2>Student Profile</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Roll No:</strong> {rollNo}
      </p>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>College:</strong> {college}
      </p>
    </div>
  );
}

export default StudentProfile;