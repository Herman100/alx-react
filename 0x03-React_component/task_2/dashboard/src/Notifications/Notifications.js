import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";


class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <div className="Notifications">
                {listNotifications.map(({ id, type, value, html }) => (
                    <NotificationItem
                        key={id}
                        type={type}
                        value={value}
                        html={html}
                        markAsRead={this.markAsRead}
                    />
                ))}
            </div>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;
