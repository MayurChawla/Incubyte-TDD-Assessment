const stringCalculator = require('./index.js');

test('Add - Empty string returns 0', () => {
    let stringToPass = ""
    expect(stringCalculator.add(stringToPass)).toBe(0);
});

test('Add - Single number returns that same number', () => {
    expect(stringCalculator.add("5")).toBe(5);
});

test('Add - Two numbers return total sum', () => {
    expect(stringCalculator.add("1,2")).toBe(3);
});

test('Add - Multiple numbers return their sum', () => {
    expect(stringCalculator.add("1,2,3,4,5,6,7,8,9")).toBe(45);
});
