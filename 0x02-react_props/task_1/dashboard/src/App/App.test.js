import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

describe("App Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("renders without crashing", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("contains the Notifications component", () => {
        expect(wrapper.containsMatchingElement(<Notifications />)).toEqual(
            true
        );
    });

    it("contains the Header component", () => {
        expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
    });

    it("contains the Login component", () => {
        expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
    });

    it("contains the Footer component", () => {
        expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
    });
});
