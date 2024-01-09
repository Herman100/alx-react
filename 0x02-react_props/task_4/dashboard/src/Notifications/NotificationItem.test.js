import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    it("renders without crashing", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("renders NotificationItem components", () => {
        expect(wrapper.find(NotificationItem).length).toBeGreaterThan(0);
    });

    it("first NotificationItem element renders the right html", () => {
        expect(wrapper.find(NotificationItem).first().html()).toContain(
            '<li data-notification-type="default">New course available</li>'
        );
    });
});
