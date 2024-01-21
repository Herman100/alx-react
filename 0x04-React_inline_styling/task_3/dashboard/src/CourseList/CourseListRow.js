import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    "th": {
        borderBottom: '1px solid #ddd',
    },
    "thtd": {
        width: '80%',
    },
    "table": {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    "tr:nth-child(2)": {
        textAlign: 'left',
    }
});

const rowStyle = { backgroundColor: "#f5f5f5ab" };
const headerStyle = { backgroundColor: "#deb5b545" };

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    return (
        <tr style={rowStyle}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th style={headerStyle} className={css(styles.th)} colSpan={2}>
                        {textFirstCell}
                    </th>
                ) : (
                    <>
                        <th className={css(styles.th)}>{textFirstCell}</th>
                        <th className={css(styles.th)}>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td className={css(styles.thtd)}>{textFirstCell}</td>
                    <td className={css(styles.thtd)}>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;
