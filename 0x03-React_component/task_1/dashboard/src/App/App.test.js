import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

describe("App tests", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("renders without crashing", () => {
        const component = shallow(<App />);

        expect(component).toBeDefined();
    });
    it("should render Notifications component", () => {
        const component = shallow(<App />);

        expect(component.containsMatchingElement(<Notifications />)).toEqual(
            false
        );
    });
    it("should render Header component", () => {
        const component = shallow(<App />);

        expect(component.contains(<Header />)).toBe(true);
    });
    it("should render Login Component", () => {
        const component = shallow(<App />);

        expect(component.contains(<Login />)).toBe(true);
    });
    it("should render Footer component", () => {
        const component = shallow(<App />);

        expect(component.contains(<Footer />)).toBe(true);
    });
    it("does not render courselist if logged out", () => {
        const component = shallow(<App />);

        component.setProps({ isLogedIn: false });

        expect(component.contains(<CourseList />)).toBe(false);
    });
    it("renders courselist if logged in", () => {
        const component = shallow(<App isLoggedIn={true} />);

        expect(component.containsMatchingElement(<CourseList />)).toEqual(
            false
        );
        expect(component.contains(<Login />)).toBe(false);
    });

    it("calls logOut and alert when 'Control' and 'h' keys are pressed", () => {
        const logOutFunction = jest.fn();
        const alertFunction = jest
            .spyOn(window, "alert")
            .mockImplementation(() => {});
        const component = shallow(<App logOut={logOutFunction} />);

        const event = new KeyboardEvent("keydown", { key: "h", ctrlKey: true });
        document.dispatchEvent(event);

        expect(logOutFunction).toHaveBeenCalled();
        expect(alertFunction).toHaveBeenCalledWith("Logging you out");
    });
});
