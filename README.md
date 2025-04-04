# Incubyte TDD Assessment

## Table of contents
- [How TDD work?](#how-tdd-work)
- [Setup TDD Environment](#setup-tdd-environment)
- [Logic](#logic)
- [Project Architecture](#project-architecture)
- [Key Outcomes](#key-outcomes)
---
## How TDD work?
Test-Driven Development (TDD) is a way to build software where you write tests before writing the actual code. Here's how it works:    
1) Write a test: Start with a test that shows what the code should do. At first, this test will fail because the code isn't written yet.  
2) Write just enough code: Add the smallest amount of code to make the test pass.  
3) Clean up the code: Improve the code’s design and structure (refactor) while making sure the test still passes.  
4) Repeat: Do these steps again for every new feature or function.  

TDD makes sure your code is clean, easy to manage, and works the way it should.

---

## Setup TDD Environment

To set up the Test-Driven Development (TDD) environment for this project, follow these steps:

1. Create an NPM project:
   ```bash
   $ npm init
   ```

2. Create `example.js` and add it to the project’s root(example is just a name and it can be replaced with any other name also).

3. Install Jest for testing:
   ```bash
   $ npm install jest --save-dev
   ```

4. Update the `package.json` test script to run Jest tests:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```

5. Create test files using the `.test.js` extension to write your tests.

6. To run tests, use the following command:
   ```bash
   $ npm run test
   ```
---

## Logic

This section explains how the string calculator works.

below is string caluculator module
```javascript
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
  
```

You can use this module -> function to expand the test cases as required.

---

## Project Architecture

Below is a simplified diagram to illustrate the project architecture:

```
Project Root
├── index.js
├── tests
│   ├── test.js
└── README.md
└── .gitignore
└──.gitattributes
└── package.json
```

This diagram represents the folder structure of the project, with index.js in the `root` folder and corresponding test files in the `tests` folder. This organization ensures that each module is thoroughly tested using Jest.

The project structure is organized as follows:

### Root Folder

The `root` folder contains the core logic and functionality of the project. It consists of the following files:

1. `index.js`: This file handles the logic for string sum.

### Test Folder

The `test` folder contains file(s) related to testing this particular project. It consists test.js:

1. `test.js`: This file contains test cases for the `index.js` module(stringCalculator).

---

## Key Outcomes
1. **Initial Test Suite**: I started by creating an initial set of test cases, each focusing on a specific feature of the String Calculator. These tests helped define how the calculator should behave.

2. **Failed Test Cases**: Following TDD principles, I ran the test suite expecting all tests to fail since the functionality was not implemented yet. This step highlighted the gaps in the code.

3. **Code Implementation**: After confirming the failed tests, I began implementing the features of the String Calculator one by one. The focus was on writing simple and clear code to make each test pass.

4. **Refactoring Process**: Once a feature was implemented and the corresponding test passed, I refactored the code. This step improved code structure, readability, and efficiency while ensuring no tests broke during the process.

5. **Test Execution and Validation**: After every code change or refactoring, I reran the tests to confirm everything worked as expected. This ensured the code was reliable and error-free.

6. **All Tests Passed**: Through multiple iterations of adding features and refining the code, I reached a point where all test cases passed successfully. This confirmed that the String Calculator met all the required functionality.

7. **Final Features Delivered**:  
    i. Create a simple String calculator with a method signature.  
    ii. Allow the add method to handle any amount of numbers.  
    iii. Allow the add method to handle new lines between numbers instead of commas("1\n2,3" should return 6).  
    iv. Support different delimiters.  
    v. Calling add with negative numbers throws an exception "negative numbers not allowed <negative_number>".  
    vi. Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2.  
    vii. Delimiters can be of any length with the following format: “//[delimiter]\n”(“//[***]\n1***2***3” should return 6).  
    viii. Allow multiple delimiters like this: “//[delim1][delim2]\n”. For example: “//[*][%]\n1*2%3” should return 6.  
    ix. Handle multiple delimiters with a length longer than one character.  



Here are some of the process outcomes Images :
![ss1](https://github.com/user-attachments/assets/522c9062-0966-42eb-8af0-4cdee66372c8)

![ss2](https://github.com/user-attachments/assets/cb49aa23-a3e1-44c6-a9ec-9cbac5452a07)

![ss3](https://github.com/user-attachments/assets/718df860-e6c0-4e14-bb79-843d28c4fd5c)

