import StudentProfile from "./components/Component1/StudentProfile";
import StudentMarks from "./components/Component2/StudentMarks";
import LoginForm from "./components/Component3/LoginForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React Hands-On Exercises</h1>

      <section>
        <h3>Hands-On 1: Student Profile Using Props</h3>

        <StudentProfile
          name="Rahul"
          rollNo="101"
          course="BCA"
          college="ABC College"
        />
      </section>

      <section>
        <h3>Hands-On 2: Student Marks Using Props + State</h3>

        <StudentMarks
          name="Rahul"
          subject="Java"
        />
      </section>

      <section>
        <h3>Hands-On 3: Login Form Using State</h3>

        <LoginForm />
      </section>
    </div>
  );
}

export default App;