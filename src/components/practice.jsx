// src/
// │── components/
// │   ├── Navbar.jsx
// │   ├── Navbar.module.css
// │
// │── pages/
// │   ├── RegistrationForm.jsx
// │   ├── RegistrationForm.module.css
// │   ├── Dashboard.jsx
// │   ├── About.jsx
// │   ├── NotFound.jsx
// │
// │── App.jsx
// │── main.jsx

// setup Rounting
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// App.jsx

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import RegistrationForm from "./pages/RegistrationForm";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<RegistrationForm setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

// Navbar
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>MyApp</h2>

      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

// Multi-Step Form
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm({ setUser }) {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const validationSchemas = [
    Yup.object({
      fullName: Yup.string().min(3).required(),
      email: Yup.string().email().required(),
      age: Yup.number().min(18).max(99).required(),
    }),
    Yup.object({
      password: Yup.string().min(8).matches(/\d/).required(),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")])
        .required(),
    }),
    Yup.object({
      terms: Yup.boolean().oneOf([true], "Required"),
    }),
  ];

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: validationSchemas[step - 1],
    onSubmit: (values) => {
      setUser(values);
      navigate("/dashboard");
    },
  });

  const nextStep = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      
      <h2>Step {step}</h2>

      {/* Step 1 */}
      {step === 1 && (
        <>
          <input name="fullName" placeholder="Full Name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.fullName && formik.errors.fullName && <p className={styles.error}>{formik.errors.fullName}</p>}

          <input name="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <input name="age" placeholder="Age" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        </>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <>
          <input type="password" name="password" placeholder="Password" onChange={formik.handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={formik.handleChange} />
        </>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <>
          <label>
            <input type="checkbox" name="terms" onChange={formik.handleChange} />
            Accept Terms
          </label>
        </>
      )}

      {/* Step 4 */}
      {step === 4 && (
        <div>
          <p>{formik.values.fullName}</p>
          <p>{formik.values.email}</p>
          <p>{formik.values.age}</p>
        </div>
      )}

      <div>
        {step > 1 && <button onClick={prevStep}>Back</button>}

        {step < 4 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}

        {step === 4 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
}

// Dashboard Page
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard({ user, setUser }) {
  const navigate = useNavigate();

  if (!user) {
    return (
      <div>
        <h2>No user found</h2>
        <Link to="/">Go to Registration</Link>
      </div>
    );
  }

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#f5f5f5",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h2>Welcome {user.fullName}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

// About Page

import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2>About This App</h2>
      <p>This is a multi-step registration app using React.</p>

      <Link to="/">Go Home</Link>
    </div>
  );
}