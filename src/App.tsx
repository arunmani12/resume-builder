import NavBar from "./components/navbar/NavBar";
import MainSection from "./components/main/MainSection";
import Progress from "./components/Progress/Progress";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  { useState, useEffect } from "react";
import Template from "./components/template/Template";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
// import {IsAuthorized} from './auth'

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);
  const [currentTmp,setcurrentTmp] = useState(0)

  const [IsAuthorized,setIsAuthorized] = useState(false)
 
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
      {isDesktop && <NavBar IsAuthorized={IsAuthorized} setIsAuthorized={setIsAuthorized}/>}
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
        {isDesktop && <Route  path="/resume" element={<Progress setcurrentTmp={setcurrentTmp} currentTmp={currentTmp}/>} />}
        {isDesktop && <Route  path="/Templates" element={<Template setcurrentTmp={setcurrentTmp}/>}/>}



        {!IsAuthorized && isDesktop && <Route  path="/login"  element={<Login setIsAuthorized={setIsAuthorized}/>} />}
        {!IsAuthorized && isDesktop && <Route  path="/Register"  element={<Register setIsAuthorized={setIsAuthorized}/>} />}

        
      </Routes>
    </Router>
  );
}

export default App;
