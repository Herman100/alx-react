import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    header: {
        fontSize: "1.4rem",
        color: "#e0354b",
        display: "flex",
        alignItems: "center",
        borderBottom: "3px solid #e0354b",
    },
    headerImg: {
        width: "200px",
        height: "200px",
    },
});

function Header() {
    return (
        <>
            <div className={css(styles.header)}>
                <img src={logo} className={css(styles.headerImg)} alt="logo" />
                <h1>School dashboard</h1>
            </div>
        </>
    );
}

export default Header;
