import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("rendering components", () => {
    it("renders NotificationItem component without crashing", () => {
        const wrapper = shallow(<NotificationItem />);

        expect(wrapper.exists()).toBe(true);
    });

    it('renders correct html from type="default" value="test" props', () => {
        const wrapper = shallow(<NotificationItem />);

        wrapper.setProps({ type: "default", value: "test" });
        expect(wrapper.find("li").prop("data-notification-type")).toEqual(
            "default"
        );
        expect(wrapper.find("li").text()).toEqual("test");
    });

    it('renders correct html from  html="<u>test</u>" props', () => {
        const wrapper = shallow(<NotificationItem />);

        wrapper.setProps({ html: "<u>test</u>" });
        expect(wrapper.find("li").prop("data-urgent")).toBe(true);
        expect(wrapper.find("li").html()).toContain("<u>test</u>");
    });
});
