import React from "react";
import "./App.css";
// import { getFullYear, getFooterCopy } from "../utils/utils.js";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";

function App() {
    return (
        <>
            <h1>Hey Miss Eddie</h1>
            <Notifications />
            <div className="App">
                <Header />
                <div className="App-body">
                    <Login />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
