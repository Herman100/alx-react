import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer({ className }) {
    return (
        <>
            <div className={className}>
                Copyright {getFullYear()} - {getFooterCopy()}
            </div>
        </>
    );
}

export default Footer;
