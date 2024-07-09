import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p>Dictionary Book</p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          {" "}
          Coded by
          <a
            href="https://www.linkedin.com/in/vanessa-iwen-040831173/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            K. Vanessa Iwen
          </a>
          /Hosted on{" "}
          <a
            href="https://peppy-churros-efdc49.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          /Open-source on{" "}
          <a
            href="https://github.com/iwenki/dictionary-app.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
