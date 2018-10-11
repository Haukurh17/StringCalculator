const add = require("./StringCalculator.js");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});