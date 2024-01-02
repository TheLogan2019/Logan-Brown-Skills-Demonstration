import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { AppRouter } from "./components/common/AppRouter";


function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <div className="app-container">
            <Header />
            <AppRouter />
            <Footer />
        </div>
      </React.StrictMode>
    </BrowserRouter>
  );
}





// Use ReactDOM.createRoot to render the new root component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
