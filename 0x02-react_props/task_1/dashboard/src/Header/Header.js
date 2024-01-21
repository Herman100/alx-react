import logo from "../assets/holberton-logo.jpg";
import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <header className="Header-header">
                <img src={logo} className="Header-logo" alt="holberton logo" />
                <h1>School dashboard</h1>
            </header>
            <hr></hr>
        </div>
    );
}

export default Header;
