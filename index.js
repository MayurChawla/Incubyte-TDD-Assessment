const stringCalculator = {
    add: (numbers) => {
        if (numbers === "") return 0;
        let delimiters = [',', '\n'];
        if (numbers.startsWith("//")) {
            const delimiterSectionEnd = numbers.indexOf("\n");
            let customDelimiter = numbers.substring(2, delimiterSectionEnd);
            if(customDelimiter.startsWith("[") && customDelimiter.endsWith("]")) {
                let currentDelimiter = "";
                let insideBrackets = false;
                for (let char of customDelimiter) {
                    if (char === '[') {
                        insideBrackets = true;
                        currentDelimiter = "";
                    } else if (char === ']') {
                        insideBrackets = false;
                        if (currentDelimiter) {
                            delimiters.push(currentDelimiter);
                        }
                    } else if (insideBrackets) {
                        currentDelimiter += char;
                    }
                }
            } else {
                delimiters.push(numbers[2]);
            }
            numbers = numbers.substring(delimiterSectionEnd + 1);
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