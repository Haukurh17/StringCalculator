const add = require("./StringCalculator.js");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
    expect(add("5")).toBe(5);   
});

it("should return the sum of two given numbers", () => {
    expect(add("1,2")).toBe(3);   
});

it("should return the sum of three given numbers", () => {
    expect(add("1,2,3")).toBe(6);   
});

it("should return the sum regardles of , or newline", () => {
    expect(add("1\n2,3")).toBe(6);   
});

it("should return an error for the negative number", () => {
    expect(add("-1, -2")).toBe("Negative not allowed: ");   
});

it("should return ignore numbers bigger than 1000", () => {
    expect(add("1000, 1001")).toBe(1000);   
});