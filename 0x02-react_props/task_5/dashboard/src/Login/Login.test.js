import { shallow } from "enzyme";
import Login from "./Login";

describe("Login Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    });

    it("renders without crashing", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("renders 2 input tags and 2 label tags", () => {
        expect(wrapper.find("input").length).toEqual(2);
        expect(wrapper.find("label").length).toEqual(2);
    });
});
