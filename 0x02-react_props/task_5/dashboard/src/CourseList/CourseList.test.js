import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Component", () => {
    let wrapper;

    describe("when listCourses is not passed or is an empty array", () => {
        beforeEach(() => {
            wrapper = shallow(<CourseList />);
        });

        it("renders correctly", () => {
            expect(wrapper.exists()).toBe(true);
        });

        it('renders a row showing "No course available yet"', () => {
            expect(wrapper.text()).toContain("No course available yet");
        });
    });

    describe("when listCourses contains courses", () => {
        const courses = [
            { id: 1, name: "ES6", credit: 60 },
            { id: 2, name: "Webpack", credit: 20 },
            { id: 3, name: "React", credit: 40 },
        ];

        beforeEach(() => {
            wrapper = shallow(<CourseList listCourses={courses} />);
        });

        it("renders CourseListRow components", () => {
            expect(wrapper.find(CourseListRow).length).toEqual(
                courses.length + 2
            ); // +2 for the header rows
        });
    });
});
