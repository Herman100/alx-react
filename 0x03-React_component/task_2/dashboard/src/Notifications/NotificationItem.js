import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
    render() {
        const { type, value, html, markAsRead, id } = this.props;
        return (
            <li data-notification-type={type} onClick={() => markAsRead(id)}>
                {value && <span>{value}</span>}
                {html && <span dangerouslySetInnerHTML={html} />}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
    type: "default",
    value: "",
    html: {},
};

export default NotificationItem;
