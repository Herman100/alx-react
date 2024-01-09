import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import { IoIosClose } from "react-icons/io";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer = false, listNotifications = [] }) {
    return (
        <>
            <div className="menuItem">Your notifications</div>
            {displayDrawer && (
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
                        onClick={() =>
                            console.log("Close button has been clicked")
                        }
                    >
                        <IoIosClose />
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications.length === 0 ? (
                            <NotificationItem
                                type="default"
                                value="No new notification for now"
                            />
                        ) : (
                            listNotifications.map(
                                ({ id, type, html, value }) => (
                                    <NotificationItem
                                        key={id}
                                        type={type}
                                        html={html}
                                        value={value}
                                    />
                                )
                            )
                        )}
                    </ul>
                </div>
            )}
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
