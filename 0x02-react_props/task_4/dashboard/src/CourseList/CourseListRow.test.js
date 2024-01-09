import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component", () => {
    let wrapper;

    describe("when isHeader is true", () => {
        beforeEach(() => {
            wrapper = shallow(
                <CourseListRow isHeader={true} textFirstCell="First cell" />
            );
        });

        it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
            expect(wrapper.find("th").length).toEqual(1);
            expect(wrapper.find("th").prop("colSpan")).toEqual("2");
        });

        it("renders two cells when textSecondCell is present", () => {
            wrapper.setProps({ textSecondCell: "Second cell" });
            expect(wrapper.find("th").length).toEqual(2);
        });
    });

    describe("when isHeader is false", () => {
        beforeEach(() => {
            wrapper = shallow(
                <CourseListRow
                    isHeader={false}
                    textFirstCell="First cell"
                    textSecondCell="Second cell"
                />
            );
        });

        it("renders correctly two td elements within a tr element", () => {
            expect(wrapper.find("td").length).toEqual(2);
        });
    });
});
