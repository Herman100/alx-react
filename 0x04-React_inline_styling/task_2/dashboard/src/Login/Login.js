import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    bodyLogin: {
        fontSize: "1rem",
        padding: "2em",
        height: "45%",
    },

    formInput: {
        margin: "10px",
    },
});

function Login() {
    return (
        <React.Fragment>
            <div className={css(styles.bodyLogin)}>
                <p>Login to access the full dashboard</p>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        className={css(styles.formInput)}
                    ></input>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        className={css(styles.formInput)}
                    ></input>
                    <button>OK</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Login;
