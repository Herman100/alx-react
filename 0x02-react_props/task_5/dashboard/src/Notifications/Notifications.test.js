import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component", () => {
    let wrapper;

    describe("when listNotifications is not passed or is an empty array", () => {
        beforeEach(() => {
            wrapper = shallow(<Notifications />);
        });

        it("renders correctly", () => {
            expect(wrapper.exists()).toBe(true);
        });

        it("does not render NotificationItem components", () => {
            expect(wrapper.find(NotificationItem).length).toEqual(0);
        });

        it("renders the correct message", () => {
            expect(wrapper.text()).toContain("No new notification for now");
        });
    });

    describe("when listNotifications contains notifications", () => {
        const notifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", html: { __html: "<u>test</u>" } },
        ];

        beforeEach(() => {
            wrapper = shallow(
                <Notifications
                    displayDrawer={true}
                    listNotifications={notifications}
                />
            );
        });

        it("renders NotificationItem components", () => {
            expect(wrapper.find(NotificationItem).length).toEqual(
                notifications.length
            );
        });
    });
});
