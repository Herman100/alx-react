import React from "react";
import "./Notifications.css";
import { IoIosClose } from "react-icons/io";
// import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

function Notifications() {
    return (
        <div className="Notifications">
            <button
                style={{ position: "absolute", right: "8px", top: "6px", height: "20px",width: "30px" }}
                aria-label="Close"
                onClick={() => console.log("Close button has been clicked")}
            >
                <IoIosClose />
                {/* Icons used instead of image */}
                {/* <img src={closeIcon} alt="Close icon" /> */}
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li
                    dangerouslySetInnerHTML={{
                        __html: getLatestNotification(),
                    }}
                ></li>
            </ul>
        </div>
    );
}

export default Notifications;
