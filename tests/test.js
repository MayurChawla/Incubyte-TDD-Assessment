const stringCalculator = require('../index.js');

//case 1
test('Add - Empty string returns 0', () => {
    let stringToPass = "";
    expect(stringCalculator.add(stringToPass)).toBe(0);
});

//case 2 - handle any amount of numbers
test('Add - Single number returns that same number', () => {
    expect(stringCalculator.add("5")).toBe(5);
});
test('Add - Two numbers return total sum', () => {
    expect(stringCalculator.add("1,2")).toBe(3);
});

//case 3 - handle new lines between numbers
test('Add - Handles new line as a delimiter', () => {
    expect(stringCalculator.add("1\n2,3")).toBe(6);
});

//case 4 - Support different delimiters
test('Add - Support different delimiters', () => {
    expect(stringCalculator.add("//;\n1;2")).toBe(3);
});

//case 5 - negatives not allowed
test('Add - Throws error for negative numbers', () => {
    expect(() => stringCalculator.add("1,-2,3,-3")).toThrow("Negatives not allowed: -2");
});
