import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);

// const rootNotifications = ReactDOM.createRoot(
//     document.getElementsByClassName("Notifications")
// );
// rootNotifications.render(
//     <React.StrictMode>
//         <Notifications />
//     </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
