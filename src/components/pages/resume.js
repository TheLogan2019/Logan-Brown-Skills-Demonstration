import logo from "../../logo.svg";

function Resume() {
  return (
    <div className="currentPage">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Resume</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default Resume;