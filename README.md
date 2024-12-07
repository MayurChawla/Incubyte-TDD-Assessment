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

Write a test: Start with a test that shows what the code should do. At first, this test will fail because the code isn't written yet.
Write just enough code: Add the smallest amount of code to make the test pass.
Clean up the code: Improve the code’s design and structure (refactor) while making sure the test still passes.
Repeat: Do these steps again for every new feature or function.
TDD makes sure your code is clean, easy to manage, and works the way it should.
---

## Setup TDD Environment

To set up the Test-Driven Development (TDD) environment for this project, follow these steps:

1. Create an NPM project:
   ```bash
   $ npm init
   ```

2. Create `example.js` and add it to the project’s root.

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
## Key Outcomes
1. Initial Test Suite: To kickstart the project, I began by creating an initial test suite consisting of 33 test cases. These test cases were carefully designed to cover various aspects of the Spacecraft's functionality.

2. Failed Test Cases: In accordance with TDD principles, I initially ran the test suite, expecting all tests to fail since I had not yet implemented any code. The purpose of this step was to identify what was missing in the codebase.

3. Code Implementation: After the initial test suite confirmed the absence of code, I started implementing the required functionality of Spacecraft. During this phase, I adhered to the principles of writing clean, modular, and maintainable code.

4. Refactoring Process: Once I had a working version of the code, I conducted iterative rounds of refactoring. This involved revisiting the code and making improvements to enhance code quality, readability, and efficiency while ensuring all tests still passed. The refactoring process was vital for long-term code maintainability.

5. Test Execution and Validation: After each refactoring iteration, I reran the test suite to ensure that the changes did not introduce any regressions. This helped maintain confidence in the correctness of the codebase.

6. All Tests Passed: After multiple iterations of implementing and refactoring, I successfully achieved a state where all 33 test cases passed without failures or errors. This marked the completion of the project.

Here are some of the process outcomes Images

![image](https://github.com/user-attachments/assets/de0409f7-c2b8-4d43-9306-79c44d61ac1e)


![image](https://github.com/user-attachments/assets/bb3c86ce-7062-48ce-9b25-a4c668a772d1)

Final Outcome :



