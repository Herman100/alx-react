import "./Login.css";

function Login() {
    return (
        <div className="Login">
            <body className="Login-body">
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
        </div>
    );
}

export default Login;
