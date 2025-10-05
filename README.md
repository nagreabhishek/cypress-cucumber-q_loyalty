# Cypress Automation Project

This project uses [Cypress](https://www.cypress.io/) for end-to-end testing.

---

### 
### Project Structure
- **`cypress/`**:
    - **`e2e/`**:
        - **`features/`**: Contains .feature files that have senarios written in Gherkin format.
        - **`step_definitions/`**: Contains the relevant step definition file.
    - **`support/`**: Includes Common Utility functions.
- **`node_modules/`**: Contains all project dependencies installed via npm.
- **`cypress.config.js`**: The main Cypress configuration file containing config such as specPattern, baseUrl.
- **`package.json`**: Defines project dependencies and stepDefinitions path.

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)

### Install Dependencies
npm install

### To run the project
To open Cypress GUI:
npx cypress open

To run in headless mode:
npx cypress run

### TO generate allure report
allure serve

### Acceptance Criteria Covered
AC1. As an end user on the Qantas Money App page, when I click the Google Play button, I am taken to the following URL.
AC2. As an end user on the Qantas Money home page, when I click the upper right “Log in” button, I am taken to the Qantas Money Login page.
AC3. As an end user, I should see the Acknowledgement of Country in the footer across multiple pages of the Qantas Money website.
AC4. As an end user on the Buy Foreign Currency page, if I enter $2500AUD into the calculator, it will show me that I can earn 3,750 Qantas Points.
