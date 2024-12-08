const stringCalculator = require('./index.js');

//case 0
test('Add - Empty string returns 0', () => {
    let stringToPass = ""
    expect(stringCalculator.add(stringToPass)).toBe(0);
});

//case 1
test('Add - Single number returns that same number', () => {
    expect(stringCalculator.add("5")).toBe(5);
});
test('Add - Two numbers return total sum', () => {
    expect(stringCalculator.add("1,2")).toBe(3);
});

//case 2
test('Add - Multiple numbers return their sum', () => {
    expect(stringCalculator.add("1,2,3,4,5,6,7,8,9")).toBe(45);
});

//case 3
test('Add - Handles new line as a delimiter', () => {
    expect(stringCalculator.add("1\n2,3")).toBe(6);
});
