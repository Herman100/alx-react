import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils.js";

function Footer() {
    return (
        <div className="Footer">
            <footer className="Footer-footer">
                <p>
                    Copyright {getFullYear()} -{getFooterCopy(false)}
                </p>
            </footer>
        </div>
    );
}

export default Footer;
