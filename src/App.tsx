import NavBar from "./components/navbar/NavBar";
import MainSection from "./components/main/MainSection";
import Progress from "./components/Progress/Progress";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {


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
      <NavBar />
      {Toast}
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/resume" element={<Progress/>} />
      </Routes>
    </Router>
  );
}

export default App;
