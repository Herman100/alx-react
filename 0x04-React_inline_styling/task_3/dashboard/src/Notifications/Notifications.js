import React, { Component } from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    Notifications: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        fontSize: "20px",
        zIndex: 1,
    },
    menuItem: {
        textAlign: "right",
    },
    ul: {
        padding: 0,
    },
});

class Notifications extends Component {
    constructor(props) {
        super(props);

        this.markAsRead = this.markAsRead.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.length > this.props.listNotifications.length;
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        return (
            <React.Fragment>
                <div className={css(styles.menuItem)}>
                    <p>Your notifications</p>
                </div>
                {this.props.displayDrawer ? (
                    <div className={css(styles.Notifications)}>
                        <button
                            style={{
                                color: "#3a3a3a",
                                fontWeight: "bold",
                                background: "none",
                                border: "none",
                                fontSize: "15px",
                                position: "absolute",
                                right: "3px",
                                top: "3px",
                                cursor: "pointer",
                                outline: "none",
                            }}
                            aria-label="Close"
                            onClick={(e) => {
                                console.log("Close button has been clicked");
                            }}
                        >
                            <img
                                src={closeIcon}
                                alt="close icon"
                                width="10px"
                            />
                        </button>
                        {this.props.listNotifications.length != 0 ? (
                            <p>Here is the list of notifications</p>
                        ) : null}
                        <ul className={css(styles.ul)}>
                            {this.props.listNotifications.length == 0 ? (
                                <NotificationItem
                                    type="default"
                                    value="No new notification for now"
                                />
                            ) : null}
                            {this.props.listNotifications.map((val, idx) => {
                                return (
                                    <NotificationItem
                                        type={val.type}
                                        value={val.value}
                                        html={val.html}
                                        key={val.id}
                                        markAsRead={this.markAsRead}
                                        id={val.id}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                ) : null}
            </React.Fragment>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: [],
};

export default Notifications;
