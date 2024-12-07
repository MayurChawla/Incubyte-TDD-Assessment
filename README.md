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
