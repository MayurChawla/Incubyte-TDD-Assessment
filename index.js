const stringCalculator = {
    add: (numbers) => {
        if (numbers === "") return 0;
        const delimiters = [',', '\n'];

        let parts = [numbers];
        delimiters.forEach(delimiter => {
            parts = parts.map(part => part.split(delimiter));
            parts = parts.flat();
        });
        return parts.reduce((sum, num) => sum + parseInt(num), 0);
    }
};

module.exports = stringCalculator;