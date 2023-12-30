import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router} from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { AppRouter } from "./components/common/AppRouter";


function App() {
  return (
    <Router>
      <React.StrictMode>
        <div className="app-container">
          <div>
            <Header />
          </div>
          <div>
            <AppRouter />
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
