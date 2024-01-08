import React from "react";
import "./Notifications.css";
import { IoIosClose } from "react-icons/io";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

function Notifications() {
    return (
        <div className="Notifications">
            <button
                style={{
                    position: "absolute",
                    right: "8px",
                    top: "6px",
                    height: "20px",
                    width: "30px",
                }}
                aria-label="Close"
                onClick={() => console.log("Close button has been clicked")}
            >
                <IoIosClose />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem
                    type="urgent"
                    html={{ __html: getLatestNotification() }}
                />
            </ul>
        </div>
    );
}

export default Notifications;
