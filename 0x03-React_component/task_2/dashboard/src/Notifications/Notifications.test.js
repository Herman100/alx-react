import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
// import NotificationItemShape from "./NotificationItemShape";

describe("Notifications", () => {
    it("calls markAsRead with correct id", () => {
        const consoleSpy = jest.spyOn(console, "log");
        const wrapper = shallow(<Notifications />);
        const instance = wrapper.instance();
        instance.markAsRead(1);
        expect(consoleSpy).toHaveBeenCalledWith(
            "Notification 1 has been marked as read"
        );
        consoleSpy.mockRestore();
    });
});
