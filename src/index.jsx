import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./components/pages/landingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <React.StrictMode>
        <Header />
        <LandingPage />
        <Footer />
      </React.StrictMode>
    </Router>
  );
}

// Use ReactDOM.createRoot to render the new root component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);