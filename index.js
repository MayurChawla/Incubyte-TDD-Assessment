const stringCalculator = {
    add: (numbers) => {
        if (numbers === "") return 0;
        let delimiters = [',', '\n'];
        if (numbers.startsWith("//")) {
            const customDelimiter = numbers[2];
            delimiters = [customDelimiter.toString()]
            numbers = numbers.substring(4);
        }

        let parts = [numbers];
        delimiters.forEach(delimiter => {
            parts = parts.map(part => part.split(delimiter));
            parts = parts.flat();
        });
        let negatives = parts.filter(num => num < 0);
        if (negatives.length > 0) {
            negatives = negatives.join(",")
            throw new Error(`Negatives not allowed: ${negatives}`);
        }
        return parts.filter(num => num <= 1000).reduce((sum, num) => sum + parseInt(num), 0);
    }
};

module.exports = stringCalculator;