const stringCalculator = require('../index.js');

//case 1
test('Add - Empty string returns 0', () => {
    let stringToPass = "";
    expect(stringCalculator.add(stringToPass)).toBe(0);
});
