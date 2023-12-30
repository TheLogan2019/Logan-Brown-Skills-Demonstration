import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import CurrentContent from "./components/Layout/currentContentContainer";

function App() {
  return (
    <Router>
      <React.StrictMode>
        <div className="app-container">
          <div>
            <Header />
          </div>
          <div>
            <Routes>
              <Route path ="/" element={<CurrentContent />} />
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </React.StrictMode>
    </Router>
  );
}





// Use ReactDOM.createRoot to render the new root component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
