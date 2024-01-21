import { getFullYear, getFooterCopy } from "../utils/utils";

describe("utils.js", () => {
    test("getFullYear returns current year", () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    test("getFooterCopy returns correct string based on argument", () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });
});
