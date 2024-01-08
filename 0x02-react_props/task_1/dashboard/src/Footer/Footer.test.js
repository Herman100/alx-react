import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it("renders without crashing", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the text "Copyright"', () => {
        expect(wrapper.text()).toContain("Copyright");
    });
});
