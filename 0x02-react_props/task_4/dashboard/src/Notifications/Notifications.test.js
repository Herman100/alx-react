// Notifications.test.js
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
    let wrapper;

    describe("when displayDrawer is false", () => {
        beforeEach(() => {
            wrapper = shallow(<Notifications />);
        });

        it("menu item is being displayed", () => {
            expect(wrapper.find(".menuItem").length).toEqual(1);
        });

        it("div.Notifications is not being displayed", () => {
            expect(wrapper.find(".Notifications").length).toEqual(0);
        });
    });

    describe("when displayDrawer is true", () => {
        beforeEach(() => {
            wrapper = shallow(<Notifications displayDrawer={true} />);
        });

        it("menu item is being displayed", () => {
            expect(wrapper.find(".menuItem").length).toEqual(1);
        });

        it("div.Notifications is being displayed", () => {
            expect(wrapper.find(".Notifications").length).toEqual(1);
        });
    });
});
