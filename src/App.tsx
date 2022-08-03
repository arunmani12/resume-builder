import NavBar from "./components/navbar/NavBar";
import MainSection from "./components/main/MainSection";
import Progress from "./components/Progress/Progress";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const Toast = (
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );

  return (
    <Router>
      {isDesktop && <NavBar />}
      {Toast}
      <Routes>
        <Route
          path="/"
          element={
            isDesktop ? (
              <MainSection />
            ) : (
              <h1 style={{ textAlign: "center",marginTop:'35vh' }}>
                Please use Desktop mobile page is under construction &#128512;
              </h1>
            )
          }
        />
        {isDesktop && <Route path="/resume" element={<Progress />} />}
      </Routes>
    </Router>
  );
}

export default App;
