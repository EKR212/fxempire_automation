# 🧪 FXEmpire Cypress Automation Project

This is a Cypress-based automation project created to test **FXEmpire.com**, focusing on **login functionality**, **search feature validation**, and **API/UI consistency checks** for top articles displayed on the homepage.

The project is designed using **Page Object Model (POM)** for reusability, clean test structure, and better maintainability. It also includes utility functions and constant definitions for scalability and flexibility.

---

## 📂 Project Structure

```
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── search.cy.js
│   └── topArticles.cy.js
├── helpers/
│   ├── consts.js
│   └── utils.js
├── pages/
│   ├── homePage.js
│   └── loginPage.js
```


---

## 🚀 Goals of the Project

- Ensure the core user flows (login, search, content display) are functioning correctly
- Automate regression tests for quick feedback
- Validate backend data (API) matches frontend (UI) content
- Identify failures due to CAPTCHA and handle them gracefully
- Enable easily expandable and readable test structure

---

## ✅ Test Cases Overview

### 🔐 Login Tests (`login.cy.js`)
- **Valid Login**: Verifies login with correct credentials opens the user session
- **Invalid Credentials**: Asserts error message when wrong credentials are submitted
- **Email Format Validation**: Ensures users can't log in with an incorrectly formatted email
- **CAPTCHA Skip**: Automatically fails the test if a CAPTCHA appears

### 🔍 Search Tests (`search.cy.js`)
- **Valid Search Query**: Types a known term (like "GOLD") into the search bar and validates result presence
- **Non-Existing Term**: Uses dynamically generated text to trigger "No matching instruments" response

### 📰 Top Articles API + UI Validation (`topArticles.cy.js`)
- Sends a `GET` request to the articles API:  
  `https://fxempire.com/api/v1/en/articles/latest/top-articles-homepage`
- Asserts:
  - Response status is 200
  - Response contains at least 5 articles 
  - Each article includes: `id`, `title`, `articleLink`, `publishedDate`
- Compares the titles from the API with those rendered on the homepage using a dynamic selector (`[data-name^="hp_article_"]`)
- Logs whether each title is present or missing in the UI

---

## 🧠 Utilities

### `skipTestIfRecaptchaExists()`
Searches for any element with `id` containing the word `captcha`. If found, the test fails early to avoid unreliable test results.

### `generateRandomText(length)`
Returns a random alphanumeric string (default 10 characters) — used for simulating unknown search inputs.

### `logger(condition, successMessage, errorMessage)`
Custom console logger for better Cypress output formatting.

---

## 🎯 Technologies Used

- **Cypress**: Modern testing framework for fast, reliable browser testing
- **JavaScript (ES6 Modules)**: Used throughout for modularity and modern syntax
- **Page Object Model (POM)**: Simplifies test code and improves scalability

---

## 🧪 Selectors Strategy

To ensure robustness and reduce flakiness:
- Login flow uses **`[data-cy]`** selectors for stability
- Search bar and results use **`[data-name]`** attributes
- Articles are matched using **`data-name^="hp_article_"`** selectors
- All elements are referenced from centralized selector objects inside POM files

---

## 🧪 Test Areas & Improvements

### 🔐 Login (with CAPTCHA handling)

**Issue**: CAPTCHA intermittently appears during login tests, causing failures.

**Fixes**:
- Implemented `skipTestIfRecaptchaExists()` to detect CAPTCHA presence and skip the test safely.
- Future plan: Use environment variables to disable CAPTCHA on test environments.

**Why it's better**: Prevents unnecessary failures and helps identify CAPTCHA presence as a test concern.

---

### 🔍 Search Tests

**Issue**: Unstable selectors and missing `data-cy` attributes.

**Fixes**:
- Replaced brittle class selectors with more reliable `[data-name="main search"]` and `[data-cy="search-results"]` where possible.
- Used dynamic text input validation and aliasing with `.as('searchResults')`.

**Why it's better**: Reduces flakiness and improves test readability and maintenance.

---

### 📰 Top Articles API vs UI Validation

**Issue**: Dynamically loaded content was sometimes missed.

**Fixes**:
- Introduced retry logic using `.should('exist')` and proper timeout handling.
- Created `GetArticleTitles()` method in `homePage.js` that pulls article titles based on consistent `data-name^="hp_article_"`.

**Why it's better**: Ensures synchronization between API data and UI, reducing false negatives.

---

## 🛠 Utility Functions

### 1. `skipTestIfRecaptchaExists()`
Skips tests if a CAPTCHA is detected in the DOM using `[id*="captcha"]`.

### 2. `generateRandomText(length)`
Generates a random search string for edge case tests.

### 3. `loger(condition, successMsg, failureMsg)`
Custom logging utility to help visualize test result steps.

---

## 🔍 Areas for Further Improvement

### 🔁 Replace static waits
- Replace `cy.wait()` with `cy.intercept()` to wait on specific network requests.

### 🧬 Add test coverage for:
- Articles under different sections
- Responsive behavior on different screen sizes
- Edge cases like rate limits or API errors

### 📊 Improve selector usage
- Use `data-cy` or `data-test-id` instead of class selectors wherever possible.

---

## 🧾 Summary

| Issue                | Fix                                           | Benefit                             |
|----------------------|-----------------------------------------------|-------------------------------------|
| CAPTCHA failures     | Skipped when detected                         | Reduces noise in results            |
| Dynamic content load | Used `.should('exist')` and retries           | More reliable UI checks             |
| Weak selectors       | Replaced with robust `data-name` or `data-cy` | Easier maintenance                  |
| Static waits         | Plan to implement `cy.intercept()`            | Faster and more deterministic tests |

---

## 🛠 Setup & Running Tests

### Prerequisites
- Node.js v16 or newer
- npm installed

### Installation
  bash
  npm install

### Run tests in interactive mode
  bash
  npx cypress open

---




   
