import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList.js";

const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

function App({ isLoggedIn = false }) {
    return (
        <>
            <Notifications
                displayDrawer={isLoggedIn}
                listNotifications={listNotifications}
            />
            <div className="App">
                <Header />
                <div className="App-body">
                    {isLoggedIn ? (
                        <CourseList listCourses={listCourses} />
                    ) : (
                        <Login />
                    )}
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
