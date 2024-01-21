// App.test.js
import { shallow } from "enzyme";
import App from "./App";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";

describe("App Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("renders without crashing", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("CourseList is not displayed", () => {
        expect(wrapper.find(CourseList).length).toEqual(0);
    });

    describe("when isLoggedIn is true", () => {
        beforeEach(() => {
            wrapper.setProps({ isLoggedIn: true });
        });

        it("Login component is not included", () => {
            expect(wrapper.find(Login).length).toEqual(0);
        });

        it("CourseList component is included", () => {
            expect(wrapper.find(CourseList).length).toEqual(1);
        });
    });
});
