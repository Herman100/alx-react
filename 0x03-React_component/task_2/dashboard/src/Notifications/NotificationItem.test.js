import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
    it("calls markAsRead with correct id on click", () => {
        const markAsRead = jest.fn();
        const wrapper = shallow(
            <NotificationItem id={1} markAsRead={markAsRead} />
        );
        wrapper.find("li").simulate("click");
        expect(markAsRead).toHaveBeenCalledWith(1);
    });
});
