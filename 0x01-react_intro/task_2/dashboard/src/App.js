import logo from "./holbertonlogo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="holberton logo" />
                <h1>School dashboard</h1>
            </header>{" "}
            <hr></hr>
            <body className="App-body">
                <p>Login to access the full dashboard</p>
                <label for="email">Email: </label>
                <input id="email" type="email" />
                <br></br>
                <br></br>
                <label for="password">Password: </label>
                <input id="password" type="password" />
                <br></br>
                <br></br>
                <button>OK</button>
            </body>
            <hr></hr>
            <footer className="App-footer">
                <p>
                    Copyright {getFullYear()} -{getFooterCopy(false)}
                </p>
            </footer>
        </div>
    );
}

export default App;
