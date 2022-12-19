/* eslint-disable no-unused-vars */
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const removeBodyColor = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-success");
  // };

  const toggleMode = (cls) => {
    // console.log(cls);
    // removeBodyColor();
    // document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      setBtnText("Enabled");
      document.body.style.backgroundColor = "#232351";
      showAlert("Darkmode is enabled", "success");
    } else {
      setMode("light");
      setBtnText("Disabled");
      document.body.style.backgroundColor = "#fff";
      showAlert("Lightmode is enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About us"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Analyze your text below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
