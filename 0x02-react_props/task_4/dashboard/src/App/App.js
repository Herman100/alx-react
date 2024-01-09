import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList.js";

function App({ isLoggedIn = false }) {
    return (
        <>
            <h1>Hey Miss Eddie</h1>
            <Notifications />
            <div className="App">
                <Header />
                <div className="App-body">
                    {isLoggedIn ? <CourseList /> : <Login />}
                </div>
                <Footer />
            </div>
        </>
    );
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
};

export default App;
