import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
    });

    it("renders without crashing", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("renders CourseListRow components", () => {
        expect(wrapper.find(CourseListRow).length).toBeGreaterThan(0);
    });
});
