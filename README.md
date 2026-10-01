# ⚛️ React Hands-On Exercises

A professional React.js mini project containing three practical hands-on exercises covering **Props, State, Event Handling, Form Handling, and Reusable Components**.

## 🌐 Live Demo

🚀 **Live Website:**  
https://kukatireshmitha986-create.github.io/React-Hands-On-Exercises/

🔗 **GitHub Repository:**  
https://github.com/kukatireshmitha986-create/React-Hands-On-Exercises

---

## 📸 Live Demo Screenshot

The following screenshot shows the deployed React application containing all three hands-on exercises.

![React Hands-On Exercises - Live Demo](screenshots/react-hands-on-exercises.png)

> **Screenshot Location:** `screenshots/react-hands-on-exercises.png`

---

## 📌 Project Overview

This project is developed as part of a React.js practical assignment. It demonstrates three independent hands-on exercises in a single React application.

### Included Exercises

1. **Student Profile Using Props**
2. **Student Marks Using Props + State**
3. **Login Form Using State**

The application is built using **React.js and Vite** with a clean component-based architecture.

---

## 🎯 Project Objectives

- Understand React functional components.
- Learn how to pass data using Props.
- Understand React State using `useState()`.
- Handle button click events.
- Handle form input changes.
- Create reusable React components.
- Organize components into separate folders.
- Build and deploy a React application using GitHub Pages.

---

# 🧩 Hands-On Exercises

## 1️⃣ Hands-On 1: Student Profile Using Props

### Objective

Create a reusable `StudentProfile` component that receives student information through Props.

### Props Used

- `name`
- `rollNo`
- `course`
- `college`

### Example

    <StudentProfile
      name="Rahul"
      rollNo="101"
      course="BCA"
      college="ABC College"
    />

### Output

    Student Profile

    Name: Rahul
    Roll No: 101
    Course: BCA
    College: ABC College

### React Concept

This exercise demonstrates **Props**, which allow data to be passed from a parent component to a child component.

---

# 2️⃣ Hands-On 2: Student Marks Using Props + State

### Objective

Create a student marks component where the student name and subject are received using Props and the marks are managed using React State.

### Props Used

- `name`
- `subject`

### State Used

    const [marks, setMarks] = useState(50);

### Features

- Displays student name.
- Displays subject.
- Displays current marks.
- Increase marks by 5.
- Decrease marks by 5.
- Updates the UI dynamically using State.

### Example Output

    Student Marks

    Student Name: Rahul
    Subject: Java
    Marks: 50

    [ Increase Marks ] [ Decrease Marks ]

### React Concepts

- Props
- State
- `useState()`
- Event handling
- Dynamic UI updates

---

# 3️⃣ Hands-On 3: Login Form Using State

### Objective

Create a login form using React State to store the username and password entered by the user.

### State Used

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

### Features

- Username input field.
- Password input field.
- Login button.
- Input value management using State.
- Login validation.
- Success message.
- Error message when fields are empty.

### Login Validation

If both username and password are entered:

    Login Successful

If either field is empty:

    Please enter username and password

### React Concepts

- `useState()`
- Controlled components
- Event handling
- Form input handling
- Conditional rendering
- Basic validation

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend UI development |
| JavaScript | Application logic |
| JSX | React component structure |
| CSS3 | Styling and responsive layout |
| Vite | React development and build tool |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Pages | Deployment |

---

# 📂 Project Structure

    React-Hands-On/
    │
    ├── screenshots/
    │   └── react-hands-on-exercises.png
    │
    ├── src/
    │   ├── components/
    │   │   ├── Component1/
    │   │   │   ├── StudentProfile.jsx
    │   │   │   └── StudentProfile.css
    │   │   │
    │   │   ├── Component2/
    │   │   │   ├── StudentMarks.jsx
    │   │   │   └── StudentMarks.css
    │   │   │
    │   │   └── Component3/
    │   │       ├── LoginForm.jsx
    │   │       └── LoginForm.css
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml
    │
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── README.md
    └── .gitignore

---

# 🖥️ Application Preview

## Live Application

The React application is deployed and accessible online:

🔗 **https://kukatireshmitha986-create.github.io/React-Hands-On-Exercises/**

### Screenshot

![React Hands-On Exercises](screenshots/react-hands-on-exercises.png)

---

# 🔄 Application Flow

    Start React Application
            │
            ▼
    React App Component
            │
            ├──────────────────┐
            │                  │
            ▼                  ▼
    Student Profile      Student Marks
      Using Props         Props + State
            │                  │
            └────────┬─────────┘
                     │
                     ▼
                 Login Form
                  Using State
                     │
                     ▼
              Login Validation
                     │
              ┌──────┴──────┐
              ▼             ▼
       Login Successful   Error Message

---

# ⭐ Key Features

- Component-based React architecture.
- Reusable Student Profile component.
- Props-based data passing.
- State management using `useState()`.
- Interactive marks management.
- Controlled form inputs.
- Login validation.
- Conditional rendering.
- Separate CSS files for components.
- Clean folder organization.
- Responsive card-based UI.
- GitHub Pages deployment.
- GitHub Actions automated deployment.

---

# 💻 Installation and Setup

## Step 1 — Clone the Repository

    git clone https://github.com/kukatireshmitha986-create/React-Hands-On-Exercises.git

## Step 2 — Open the Project

    cd React-Hands-On-Exercises

## Step 3 — Install Dependencies

    npm install

## Step 4 — Start the Development Server

    npm run dev

The application will be available at the local URL provided by Vite.

---

# 🏗️ Build the Project

To create a production build:

    npm run build

The production files will be generated inside:

    dist/

---

# 👀 Preview Production Build

After building the project:

    npm run preview

---

# 🌐 GitHub Pages Deployment

The project is deployed using **GitHub Actions** and **GitHub Pages**.

### Deployment Flow

    Developer
        ↓
    Push Code to GitHub
        ↓
    GitHub Actions
        ↓
    Install Dependencies
        ↓
    Build React Application
        ↓
    Generate dist Folder
        ↓
    Upload Pages Artifact
        ↓
    Deploy to GitHub Pages
        ↓
    Live Website

### GitHub Actions Workflow

The deployment workflow is located at:

    .github/workflows/deploy.yml

The workflow automatically builds and deploys the React application whenever changes are pushed to the `main` branch.

---

# 🔗 Project Links

### 🚀 Live Demo

https://kukatireshmitha986-create.github.io/React-Hands-On-Exercises/

### 📦 GitHub Repository

https://github.com/kukatireshmitha986-create/React-Hands-On-Exercises

---

# 🧪 Testing

## Test Case 1 — Student Profile

Input:

    Name: Rahul
    Roll No: 101
    Course: BCA
    College: ABC College

Expected Result:

    Student Profile
    Name: Rahul
    Roll No: 101
    Course: BCA
    College: ABC College

Status:

    Passed

---

## Test Case 2 — Increase Marks

Initial Marks:

    50

Action:

    Click Increase Marks

Expected Result:

    55

Status:

    Passed

---

## Test Case 3 — Decrease Marks

Initial Marks:

    50

Action:

    Click Decrease Marks

Expected Result:

    45

Status:

    Passed

---

## Test Case 4 — Login With Empty Fields

Action:

    Click Login without entering username and password.

Expected Result:

    Please enter username and password

Status:

    Passed

---

## Test Case 5 — Login With Entered Credentials

Action:

    Enter username and password and click Login.

Expected Result:

    Login Successful

Status:

    Passed

---

# 📚 React Concepts Demonstrated

### Functional Components

Each exercise is implemented using a reusable functional component.

### Props

Props are used to pass data from the parent component to child components.

### State

The `useState()` Hook is used to manage changing data.

### Event Handling

Button click events are handled using React event handlers.

### Controlled Components

The username and password inputs are controlled using React State.

### Conditional Rendering

The login result message is displayed conditionally based on the entered values.

### Component Organization

Each hands-on exercise is maintained in its own component folder.

---

# 🎓 Learning Outcomes

After completing this project, the following concepts are understood:

- Creating React applications using Vite.
- Creating functional components.
- Passing data using Props.
- Managing component State.
- Using the `useState()` Hook.
- Handling user interactions.
- Creating controlled form fields.
- Implementing simple validation.
- Structuring React projects professionally.
- Separating JSX and CSS files.
- Building React applications.
- Deploying React applications using GitHub Pages.
- Using GitHub Actions for automated deployment.

---

# 🚀 Future Enhancements

- Add multiple student profiles.
- Add student registration functionality.
- Add total marks and percentage calculation.
- Add grade calculation.
- Add password visibility toggle.
- Add form reset functionality.
- Add React Router for multiple pages.
- Add local storage for student data.
- Add responsive navigation.
- Add dark mode.
- Add backend API integration.
- Add database integration.
- Add authentication and authorization.

---

# 👩‍💻 Author

**Reshmitha Kukati**

AI & Data Science Student

GitHub:

https://github.com/kukatireshmitha986-create

---

# 📌 Project Information

| Category | Details |
|---|---|
| Project Name | React Hands-On Exercises |
| Project Type | React.js Mini Project / Hands-On Assignment |
| Frontend | React.js |
| Language | JavaScript |
| Markup | JSX |
| Styling | CSS3 |
| Build Tool | Vite |
| Deployment | GitHub Pages |
| Version Control | Git & GitHub |
| Status | Completed |

---

# 📊 Project Summary

This React project combines three practical exercises into a single application.

The first exercise demonstrates how Props can be used to pass student information into a reusable component.

The second exercise combines Props and State to create an interactive student marks component where the marks can be increased or decreased dynamically.

The third exercise demonstrates State management through a controlled login form with basic validation and conditional messages.

Together, these exercises provide practical experience with fundamental React concepts such as Components, Props, State, Hooks, Event Handling, Controlled Inputs, and Conditional Rendering.

---

# ✅ Final Status

**Project Status:** Completed

**Live Demo:**  
https://kukatireshmitha986-create.github.io/React-Hands-On-Exercises/

**GitHub Repository:**  
https://github.com/kukatireshmitha986-create/React-Hands-On-Exercises

**Screenshot:**  
`screenshots/react-hands-on-exercises.png`

---

# 🙏 Thank You

Thank you for reviewing the **React Hands-On Exercises** project.

This project was developed to gain practical knowledge of React.js fundamentals, component-based development, Props, State, event handling, form handling, and modern frontend deployment.
